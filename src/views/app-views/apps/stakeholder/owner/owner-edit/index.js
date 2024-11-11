import React from 'react'
import { useParams } from 'react-router-dom';
import OwnerForm from '../OwnerForm';

const EditOwner = () => {
	const params = useParams();

	return (
		<OwnerForm mode="EDIT" param={params}/>
	)
}

export default EditOwner
