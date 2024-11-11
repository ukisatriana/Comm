import React, {useEffect, useState} from 'react'
import { Card, Table, Input, Button, Menu } from 'antd';
import ProductListData from "assets/data/product-list.data.json";
import ownerData from "assets/data/owner-data.json";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'


const OwnerList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState(ownerData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('owners');
				setList(documents);
			} catch (error) {
				console.log('Error fetching documents: ', error.message);
			}
		};

		fetchData();
	}
	, []);


	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EditOutlined />
					<span className="ml-2">Edit</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addOwner = () => {
		navigate(`/app/apps/stakeholder/owner/owner-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/stakeholder/owner/owner-edit/${row.id}`)
	}
	
	const deleteRow = row => {
		const objKey = 'id'
		let data = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(elm => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	}

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Owner Logo',
			dataIndex: 'ownerLogo',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus size={60} type="square" src={record.image} name={record.name}/>
				</div>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ownerLogo')
		},
		{
			title: 'Owner Name',
			dataIndex: 'ownerName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ownerName')
		},
		{
			title: 'Owner Addres',
			dataIndex: 'ownerAddres',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ownerAddres')
		},
		
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : ownerData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
				</Flex>
				<div>
					<Button onClick={addOwner} type="primary" icon={<PlusCircleOutlined />} block>Add Owner</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default OwnerList
