import { DownOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Dropdown, Space, Typography } from 'antd';
import s from './FilterBoard.module.css'

interface IFilterBoard {
    filterBy: string,
    handleSelection: (e: MenuInfo) => void,
    filtered: number,
    total: number,
}

const FilterBoard = ({ filterBy, handleSelection, filtered, total }: IFilterBoard) => {

    const items = [
        {
            key: 0,
            label: 'Show Active',
            onClick: handleSelection,
        },
        {
            key: 1,
            label: 'Show All',
            onClick: handleSelection,
        },
        {
            key: 2,
            label: 'Show Deactivated',
            onClick: handleSelection,
        },
    ];

    const sortTitle: string = items[Number(filterBy)]?.label

    return (
        <div className={s.filterWrapper}>
            <Dropdown menu={{
                items,
                selectable: true,
                defaultSelectedKeys: [filterBy],
            }}>
                <Typography.Link className={s.sortDropdown}>
                    <Space>
                        {sortTitle}
                        <DownOutlined />
                    </Space>
                </Typography.Link>
            </Dropdown>
            {total > 0 && <p className={s.filterResult}>Showing {filtered} of {total}</p>}
        </div>
    )
}
export default FilterBoard