/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import './AddSneaker.scss';
import { addShoes } from 'src/API/sneaker-service';
import { ISneakerData } from 'src/store/interface';
import { axiosInstanceWithAction } from 'src/API/axios';

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().required(),
    image: yup.string().required(),
    description: yup.string().required()
  })
  .required();

const AddSneaker = () => {
  const navigate: NavigateFunction = useNavigate();
  const [fileChosen, setFileChosen] = useState('');
  const [sneakerImage, setSneakerImage] = useState<any>(null);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ISneakerData>({
    resolver: yupResolver(schema)
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setFileChosen(URL.createObjectURL(img));
      setSneakerImage(img);
    }
  };
  const formSubmitHandler: SubmitHandler<ISneakerData> = (data: ISneakerData) => {
    if (sneakerImage) {
      const imageData = new FormData();
      const fileName = Date.now() + sneakerImage.name;
      imageData.append('name', fileName);
      imageData.append('file', sneakerImage);
      try {
        axiosInstanceWithAction.post('/upload/', imageData);
      } catch (err) {
        console.log(err);
      }
      console.log(fileName);
      addShoes({
        name: data.name,
        price: data.price,
        image: fileName,
        description: data.description
      }).then(() => {
        navigate('/sneaker');
      });
    }
  };
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-5 text-center">
              <img src={fileChosen} className="img-fluid" width="300" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form action="" onSubmit={handleSubmit(formSubmitHandler)} encType="multipart/form-data">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="lead fw-normal mb-0 me-3">New Sneaker</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    {...register('name')}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="number"
                    min={0}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Price ($)"
                    {...register('price')}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Image"
                    {...register('image')}
                    onChange={onImageChange}
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Description"
                    {...register('description')}
                  />
                </div>

                <button type="submit" className="btn btn-info btn-lg w-100">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddSneaker;
