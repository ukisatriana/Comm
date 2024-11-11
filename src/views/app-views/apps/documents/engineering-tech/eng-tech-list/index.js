import React, {useState} from 'react'
import { Card, Table, Input, Button, Menu } from 'antd';
import ProductListData from "assets/data/product-list.data.json"
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import { useNavigate } from "react-router-dom";
import utils from 'utils'


const EngTechList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState(ProductListData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

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
	
	const addEngTech = () => {
		navigate(`/app/apps/documents/engineering-tech/eng-tech-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/apps/documents/engineering-tech/eng-tech-edit/${row.id}`)
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
			title: 'Commisioning Docs Name',
			dataIndex: 'name',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
		},
		{
			title: 'Project Name',
			dataIndex: 'category',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'category')
		},
		{
			title: 'file doc',
			dataIndex: 'price',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'price')
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
		const searchArray = e.currentTarget.value? list : ProductListData
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
					<Button onClick={addEngTech} type="primary" icon={<PlusCircleOutlined />} block>Add Document</Button>
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

export default EngTechList
