import React from 'react'
// import ProductForm from '../ProductForm';
import { useParams } from 'react-router-dom';
import UserForm from '../UserForm';

const EditUser = () => {
	const params = useParams();

	return (
		<UserForm mode="EDIT" param={params}/>
	)
}

export default EditUser
