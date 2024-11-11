import React from 'react'
// import ProductForm from '../ProductForm';
import { useParams } from 'react-router-dom';
import DocengForm from '../DocengForm';

const EditDocEng = () => {
	const params = useParams();

	return (
		<DocengForm mode="EDIT" param={params}/>
	)
}

export default EditDocEng
