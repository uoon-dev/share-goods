import React from 'react';

import { MdClear } from "react-icons/md";
import classes from './FormData.module.css';

const formData = (props) => (
  <div className={classes.FormData}>
    <div>
      <span><strong>이름&nbsp;&nbsp;</strong> {props.userData.name}</span>
      <span><strong>나라&nbsp;&nbsp;</strong> {props.userData.country}</span>
      <br></br>
      <span><strong>거리&nbsp;&nbsp;</strong> {props.userData.street}</span>
      <span><strong>우편번호&nbsp;&nbsp;</strong> {props.userData.zipCode}</span>
      <br></br>
      <span><strong>이메일&nbsp;&nbsp;</strong> {props.userData.email}</span>
    </div>
    <div>
      <MdClear onClick={() => props.removeOrder(props.userData.key)} />
    </div>

  </div>
)

export default formData;