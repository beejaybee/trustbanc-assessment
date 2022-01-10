import { CgSmartphone } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FiCreditCard, FiSettings } from 'react-icons/fi';
import { MdTransferWithinAStation, MdOutlineAutoGraph } from 'react-icons/md';
import { TiShoppingBag } from 'react-icons/ti';


export const links = [
    {
        id: 1,
        url: '/dashboard',
        text: 'home',
        icon: <FaHome />,
    },
    
    {
        id: 2,
        url: '/transfer',
        text: 'transfer',
        icon: <MdTransferWithinAStation/>,
    },
    {
        id: 3,
        url: '/savings',
        text: 'target savings',
        icon: <MdOutlineAutoGraph />,
    },
    {
        id: 4,
        url: '/airtime',
        text: 'airtime & bills',
        icon: <CgSmartphone />,
    },
    {
        id: 5,
        url: '/card',
        text: 'cards',
        icon: <FiCreditCard />,
        },
    
    {
        id: 6,
        url: '/loan',
        text: 'loans',
        icon: <TiShoppingBag />,
        },
    
    {
        id: 7,
        url: '/settings',
        text: 'setings',
        icon: <FiSettings />,
    },
];