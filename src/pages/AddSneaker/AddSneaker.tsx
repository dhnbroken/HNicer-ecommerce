import React, { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import './AddSneaker.scss';
import { addShoes, updateShoes } from 'src/API/sneaker-service';
import { ISneakerData } from 'src/store/interface';
import { axiosInstance } from 'src/API/axios';
import { GlobalContextProvider } from 'src/Context/GlobalContext';

const schema = yup
  .object({
    name: yup.string().required('Please input name of product'),
    price: yup.number().min(1).required('Price must be larger than 0'),
    description: yup.string().required('Please describe the product description')
  })
  .required();

const AddSneaker = () => {
  const navigate: NavigateFunction = useNavigate();
  const { isEdit, setIsEdit, sneakerInfo } = useContext(GlobalContextProvider);
  const [fileChosen, setFileChosen] = useState('');
  const [sneakerImage, setSneakerImage] = useState<any>('dfshoes.png');

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

  const updateSneaker = async (data: ISneakerData) => {
    try {
      const res = await updateShoes(sneakerInfo._id, data);
      setIsEdit(false);
      return res;
    } catch (err) {}
  };
  const formSubmitHandler: SubmitHandler<ISneakerData> = (data: ISneakerData) => {
    if (!isEdit) {
      if (sneakerImage) {
        const imageData = new FormData();
        const fileName = Date.now() + sneakerImage.name;
        imageData.append('name', fileName);
        imageData.append('file', sneakerImage);
        try {
          axiosInstance.post('/upload/', imageData);
        } catch (err) {}
        if (!isEdit) {
          addShoes({
            name: data.name,
            price: data.price,
            image: fileName,
            description: data.description
          }).then(() => {
            navigate('/sneaker');
          });
        }
      }
    } else {
      if (sneakerImage) {
        const imageData = new FormData();
        const fileName = Date.now() + sneakerImage.name;
        imageData.append('name', fileName);
        imageData.append('file', sneakerImage);
        try {
          axiosInstance.post('/upload/', imageData);
        } catch (err) {}
        const sneakerData = {
          name: data.name,
          price: data.price,
          image: fileName,
          description: data.description
        };
        updateSneaker(sneakerData);
      } else {
        const sneakerData = {
          name: data.name,
          price: data.price,
          image: sneakerInfo.image,
          description: data.description
        };
        updateSneaker(sneakerData);
      }
      navigate('/sneaker');
    }
  };
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-5 text-center">
              <img
                src={`http://localhost:5000/images/${sneakerInfo.image}` || fileChosen}
                className="img-fluid"
                width="300"
              />
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
                    defaultValue={sneakerInfo.name}
                    placeholder="Name"
                    {...register('name')}
                  />
                  <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="number"
                    min={0}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Price ($)"
                    defaultValue={sneakerInfo.price}
                    {...register('price')}
                  />
                  <p className="text-danger">{errors.price?.message}</p>
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
                  <p className="text-danger">{!sneakerImage && 'Please choose Image'}</p>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Description"
                    defaultValue={sneakerInfo.description}
                    {...register('description')}
                  />
                  <p className="text-danger">{errors.description?.message}</p>
                </div>

                <button type="submit" className="btn btn-info btn-lg w-100">
                  {isEdit ? 'Edit' : 'Add'}
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
