import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setMember } from "../store/member.js";
import { useForm } from '../utils/useForm.ts';
import { FC } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface User {
  name: string;
  email: string;
  password: string;
  city: string;
}

const Register: FC = () => {
  const [dob, setDob] = useState(new Date());
  const cityList = ['Chennai', 'Mumbai', 'Delhi', 'Hydrebad', 'Calcutta'];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, data: user, errors } = useForm<User>({
    validations: {
      name: {
        custom: {
          isValid: (value) => value.length >= 3,
          message: 'Minimum 3 characters required.',
        }
      },
      email: {
        pattern: {
          value: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$',
          message: 'Enter in email format',
        }
      },
      password: {
        pattern: {
          value: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',
          message: 'Password must have one uppercase, lowercase, numeric, special character and minimum 8 characters',
        }
      },
      city: {
        required: {
          value: true,
          message: 'City fields is required'
        }
      }
    },
    onSubmit: () => {
      dispatch(setMember({
        username: user.name,
        email: user.email,
        city: user.city,
        dob: dob
      }));
  
      navigate('/profile');
    },
  });

  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
          <form onSubmit={handleSubmit}>
            {
              <div className="form-group">
                <div>
                  <label>Name</label>
                  <input
                    placeholder="Name"
                    value={user.name || ''}
                    onChange={handleChange('name')}
                    required
                    className="form-control field-style"
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    value={user.email || ''}
                    onChange={handleChange('email')}
                    required
                    className="form-control field-style"
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                  <label>Password</label>
                  <input
                    placeholder="Password*"
                    value={user.password || ''}
                    onChange={handleChange('password')}
                    required
                    className="form-control field-style"
                  />
                  {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div>
                  <label>City</label>
                  <select className="form-control field-style" placeholder="Select a City" value={user.city || ''} onChange={handleChange('city')}>
                    <option value="" disabled selected>Select your option</option>
                    {
                      cityList.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))
                    }                    
                  </select>
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>

                <div>
                  <label>Date of Birth</label>
                  <DatePicker className="form-control field-style" selected={dob} onChange={(date) => setDob(date)} />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Register</button>
                </div>
              </div>
            }
          </form>
      </div>

    </div>
  );
};

export default Register;
