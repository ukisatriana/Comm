import React from 'react'
import { useParams } from 'react-router-dom';
import ConsPunchForm from '../ConsPunchForm';

const EditProduct = () => {
	const params = useParams();

	return (
		<ConsPunchForm mode="EDIT" param={params}/>
	)
}

export default EditProduct
