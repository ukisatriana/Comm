import React, { useState, useEffect } from 'react'
import { Card, Table, Input, Button, Menu, message } from 'antd';
import { FolderViewOutlined, EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'



const WaterFlushingList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState()
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documents = await FirestoreService.getDocuments('waterFlushing');
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
					<FolderViewOutlined />
					<span className="ml-2">View</span>
				</Flex>
			</Menu.Item>
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
	// navigate(`/app/apps/documents/commisioning/air-blowing/air-blowing-add`)
	const addWaterFlushing = () => {
		navigate(`/app/apps/documents/commisioning/water-flushing/water-flushing-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/documents/commisioning/water-flushing/water-flushing-edit/${row.id}`)
	}

	const viewDetailsData = row => {
		navigate(`/app/apps/documents/commisioning/water-flushing/water-flushing-detail/${row.id}`)
	}
	
	const deleteRow = async row => {
		try {
		  await FirestoreService.deleteDocument('waterFlushing', row.id);
		  message.success('Air Blowing deleted successfully');
		  setList(list.filter(item => item.id !== row.id));
		} catch (error) {
		  message.error('Error deleting Project: ' + error.message);
		}
	  };

	const tableColumns = [
		// {
		// 	title: 'ID',
		// 	dataIndex: 'id'
		// },
		{
			title: 'ID',
			dataIndex: 'id',
			render: (text, record, index) => index + 1

		},
		{
			title: 'Water Flushing Procedure Name',
			dataIndex: 'nameWaterFlushing',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'nameWaterFlushing')
		},
		{
			title: 'Project Name',
			dataIndex: 'projectName',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectName')
		},
		{
			title: 'Date',
			dataIndex: 'reqToWaterFlushingDate',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'reqToWaterFlushingDate')
		},
		{
			title: 'Owner',
			dataIndex: 'owner',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'owner')
		},
		{
			title: 'Contractor',
			dataIndex: 'contractor',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'contractor')
		},
		{
			title: 'Subcontractor',
			dataIndex: 'subContractor',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'subcontractor')
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

	// const onSearch = e => {
	// 	const value = e.currentTarget.value
	// 	const searchArray = e.currentTarget.value? list : list
	// 	const data = utils.wildCardSearch(searchArray, value)
	// 	setList(data)
	// 	setSelectedRowKeys([])
	// }


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						{/* <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/> */}
					</div>
				</Flex>
				<div>
					<Button onClick={addWaterFlushing} type="primary" icon={<PlusCircleOutlined />} block>Add Commissioning</Button>
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

export default WaterFlushingList
