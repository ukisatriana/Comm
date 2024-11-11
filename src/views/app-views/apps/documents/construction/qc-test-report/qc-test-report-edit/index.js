import React from 'react'
import { useParams } from 'react-router-dom';
import QcTestReportForm from '../QcTestReportForm';

const EditProduct = () => {
	const params = useParams();

	return (
		<QcTestReportForm mode="EDIT" param={params}/>
	)
}

export default EditProduct
