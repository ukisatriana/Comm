import React from 'react'
import { useParams } from 'react-router-dom';
import ProcurmentForm from '../ProcurmentForm';

const EditProduct = () => {
	const params = useParams();

	return (
		<ProcurmentForm mode="EDIT" param={params}/>
	)
}

export default EditProduct
