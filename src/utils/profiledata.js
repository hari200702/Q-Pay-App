import {
  BuildingLibraryIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  CpuChipIcon,
  CreditCardIcon,
  CogIcon,
  UsersIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

export const profileCards = [
  {
    id: 'bank-account',
    icon: BuildingLibraryIcon,
    title: 'XXXX 9820',
    subtitle: 'ICICI Bank | Chennai',
    description: 'Egmore Branch',
    link: '/bank-accounts'
  },
  {
    id: 'business-profile',
    icon: DocumentTextIcon,
    title: 'Business Profile',
    subtitle: 'View and edit your',
    description: 'business details',
    link: '/business-profile'
  },
  {
    id: 'kyc-verification',
    icon: ShieldCheckIcon,
    title: 'KYC Verification',
    subtitle: 'Unlock exclusive',
    description: 'benefits with KYC',
    link: '/kyc'
  },
  {
    id: 'order-qr',
    icon: ShoppingCartIcon,
    title: 'Order QR',
    subtitle: 'Get paid, manage &',
    description: 'order QRs',
    link: '/qr-codes'
  }
];

export const businessServices = [
  { 
    id: 'smart-speaker',
    icon: CpuChipIcon, 
    label: 'Smart Speaker',
    link: '/smart-speaker'
  },
  { 
    id: 'pos-machine',
    icon: CreditCardIcon, 
    label: 'POS Machine',
    link: '/pos-machine'
  }
];

export const manageBusinessItems = [
  { 
    id: 'payment-settings',
    icon: CogIcon, 
    label: 'Payment Settings',
    link: '/settings/payment'
  },
  { 
    id: 'manage-staff',
    icon: UsersIcon, 
    label: 'Manage Staff',
    link: '/staff'
  },
  { 
    id: 'change-language',
    icon: LanguageIcon, 
    label: 'Change Language',
    link: '/settings/language'
  }
];