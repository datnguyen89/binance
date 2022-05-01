import ICONS from '../icons'


// region Web UI Config
export const APP_CLIENT_ID = 6
export const APP_PAGE_SIZE = 10
export const SIDEBAR_WIDTH_EXPAND = 240
export const SIDEBAR_WIDTH_COLLAPSE = 64
export const SUGGEST_AMOUNT = [
  10000,
  20000,
  50000,
  100000,
]
export const ERROR_COLOR = 'red'
export const SUCCESS_TITLE = 'Thông báo'
export const INFO_COLOR = '#0465B0'
export const SUCCESS_COLOR = '#52c41a'
export const WARNING_COLOR = '#faad14'
export const INFO_TITLE = 'Thông báo'
export const WARNING_TITLE = 'Cảnh báo'
export const ERROR_TITLE = 'Thông báo lỗi'
export const RESULT_TRANSACTION_TITLE = 'Kết quả giao dịch'
export const GO_HOME_TEXT = 'Về trang chủ'
export const OTHER_TRANSACTION_TEXT = 'Giao dịch khác'
export const CLOSE_TEXT = 'Đóng'
export const TEXT_403 = 'Bạn không có quyền sử dụng chức năng này'
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const SHORT_DATE = 'DD-MM-YYYY'
export const STRING_DATE = 'YYYYMMDD'

// endregion
// region PropertiesServer
// Danh sách ID nhóm loại yêu cầu
export const GROUP_EXECUTION_TYPE_ID = {
  LINK_UNLINK: 2101000,
  DEPOSIT: 2201000,
  WITHDRAW: 2301000,
  TRANSFER_WALLET: 2401000,
  TRANSFER_MULTIPLE: 2501000,
  DEPOSIT_MM: 2601000,
  WITHDRAW_MM: 2701000,
}
// Danh sách ID loại yêu cầu
export const EXECUTION_TYPE_ID = {
  LINK: 2101001,
  UNLINK: 2101002,
  DEPOSIT: 2201001,
  WITHDRAW: 2301001,
  TRANSFER_PERSONAL: 2401001,
  TRANSFER_MM: 2401002,
  TRANSFER_ENT: 2401003,
  TRANSFER_MULTIPLE: 2501001,
  DEPOSIT_MM: 2601001,
  WITHDRAW_MM: 2701001,
}
// Danh sách trạng thái yêu cầu
export const EXECUTION_ORDER_STATUS = {
  DELETED: -4, // Đã xóa
  WAIT_CONFIRM: -3, // Khi đang có user thao tác với lệnh
  REJECT: -2, // Từ chối
  IN_PROGRESS: -1, // Đang xử lý hiện tại chỉ dùng để filter
  WAIT_APPROVAL: 0, // Chờ duyệt
  REVIEWED: 1, // Đã review
  APPROVED: 2, // Đã duyệt
}
// Danh sách hành động
export const ACTION_EXECUTION = {
  INIT_EDIT: 'INIT_EDIT',
  INIT_DELETE: 'INIT_DELETE',
  APPROVE: 'APPROVE',
  REVIEW: 'REVIEW',
  REJECT: 'REJECT',
}
// Loại thiết bị
export const DEVICE_TYPE = 13
// Loại người dùng
export const USER_TYPE = {
  WALLET: 1,
  ENTERPRISE: 2,
}
// Danh sách loại quyền
export const ROLE_TYPE = {
  INIT: 'INIT',
  REVIEW: 'REVIEW',
  APPROVE: 'APPROVE',
}
// 1:nạp, 2:rút, 3:chuyển, 4:thanh toán
export const FEE_TYPE = {
  DEPOSIT: 1,
  WITHDRAW: 2,
  TRANSFER: 3,
  PAYMENT: 4,
}
// 0:Pay-Pay,1mm-mm,2:pay-mm (cùng chủ tk),3:mm-pay (cùng chủ tk),4: pay-mm, 5:mm-pay
export const TRANSFER_TYPE = {
  PAY_PAY: 0,
  MM_MM: 1,
  PAY_MM_SELF: 2,
  MM_PAY_SELF: 3,
  PAY_MM_OTHER: 4,
  MM_PAY_OTHER: 5,
  DEPOSIT_MM: 6,
  WITHDRAW_MM: 7,
}
// Danh sách trạng thái user
export const USER_STATUS = {
  NOT_ACTIVE: 0, // Chưa kích hoạt
  ACTIVE: 1,
  INACTIVE: 2, // Lâu không kích hoạt
  BLOCK: 3,
  BLOCK_SERVICES: 4,
}
export const ROLE_CATEGORIES = {
  DEPOSITMM: 'DEPOSITMM',
  WITHDRAWMM: 'WITHDRAWMM',
  UNLINK: 'UNLINK',
  DEPOSITLINK: 'DEPOSITLINK',
  TRANSFERPERSONAL: 'TRANSFERPERSONAL',
  LINK: 'LINK',
  TRANSFERMM: 'TRANSFERMM',
  WITHDRAWLINK: 'WITHDRAWLINK',
  PAYMENT: 'PAYMENT',
}
export const ROLES = {
  INITLINK: 'InitLink',
  REVIEWLINK: 'ReviewLink',
  APPROVELINK: 'ApproveLink',

  INITUNLINK: 'InitUnlink',
  REVIEWUNLINK: 'ReviewUnlink',
  APPROVEUNLINK: 'ApproveUnlink',

  INITDEPOSIT: 'InitDeposit',
  REVIEWDEPOSIT: 'ReviewDeposit',
  APPROVEDEPOSIT: 'ApproveDeposit',

  INITTRANSFERPERSONAL: 'InitTransferPersonal',
  REVIEWTRANSFERPERSONAL: 'ReviewTransferPersonal',
  APPROVETRANSFERPERSONAL: 'ApproveTransferPersonal',

  INITTRANSFERENTERPRISE: 'InitTransferEnterprise',
  REVIEWTRANSFERENTERPRISE: 'ReviewTransferEnterprise',
  APPROVETRANSFERENTERPRISE: 'ApproveTransferEnterprise',

  INITTRANSFERMM: 'InitTransferMM',
  REVIEWTRANSFERMM: 'ReviewTransferMM',
  APPROVETRANSFERMM: 'ApproveTransferMM',

  INITWITHDRAW: 'InitWithdraw',
  REVIEWWITHDRAW: 'ReviewWithdraw',
  APPROVEWITHDRAW: 'ApproveWithdraw',

  INITDEPOSITMM: 'InitDepositMM',
  REVIEWDEPOSITMM: 'ReviewDepositMM',
  APPROVEDEPOSITMM: 'ApproveDepositMM',

  INITWITHDRAWMM: 'InitWithDrawMM',
  REVIEWWITHDRAWMM: 'ReviewWithDrawMM',
  APPROVEWITHDRAWMM: 'ApproveWithDrawMM',

  INITTRANSFERMULTI: 'InitTransferMulti',
  REVIEWTRANSFERMULTI: 'ReviewTransferMulti',
  APPROVETRANSFERMULTI: 'ApproveTransferMulti',

  INITPAYMENT: 'InitPayment',
  REVIEWPAYMENT: 'ReviewPayment',
  APPROVEPAYMENT: 'ApprovePayment',

  DETAILREPORT: 'DetailReport',

  SUMREPORT: 'SumReport',
}
// ACCOUNT type
export const ACCOUNT_TYPES = {
  WALLET: 0,
  MM: 1,
}
// balance type
export const BALANCE_TYPES = {
  PAYMENT: 1,
}
// BankServiceType
export const BANKSERVICETYPE = {
  DEPOSIT: 1,
  WITHDRAW: 2,
  PAYMENT: 4,
  ALL: 7, // Tất cả"
}
// PayType
export const PAYTYPE = {
  DEPOSIT_ONLINE_BANKING: 1,  //DEPOSIT FROM VN ONLINE BANKING
  DEPOSIT_INTERNATIONAL_CARD: 2, //  DEPOSIT FROM INTERNATIONAL CARD ONLINE
  DEPOSIT_BANK_TRANSFER: 3, //  DEPOSIT FORM BANK TRANSFER(ATM, IBANKING)
  DEPOSIT_FROM_MMONEY: 4, //  DEPOSIT FROM MMONEY

  DEPOSIT_OTHER: 6, //  DEPOSIT FROM OTHER
  PAYMENT_ONLINE_BANKING: 7, //  PAYMENT BY VN ONLINE BANKING
  PAYMENT_INERNATIONAL_CARD: 8, //  PAYMENT BY INERNATIONAL CARD
  TRANSFER_MONEY: 9, //  TRANSFER MONEY
  PAYMENT_WALLET: 10, //	PAYMENT BY WALLET
  WITHDRAW_ONLINE_BANK: 11, //	WITHDRAW TO ONLINE BANK
  WITHDRAW_OFFLINE_BANK: 12, //	WITHDRAW TO OFFLINE BANK
  WITHDRAW_TO_MMONEY: 13,
  TRANSFER_TO_MMONEY: 14, //  TRANSFER FROM MMONEY
  REFUND_MONEY: 15, //	REFUND MONEY
  RECOVERY_MONEY: 16, //	RECOVERYMONEY
  FREEZE: 17, //	FREEZE
  CHARGE_FEE: 18, //	CHARGE FEE
  DEPOSIT_LINKED_BANK: 19, //	DEPOSIT FROM LINKED BANK
  PAYMENT_LINKED_BANK: 20, //	PAYMENT BY LINKED BANK
  WITHDRAW_LINKED_BANK: 21, //	WITHDRAW TO LINKED BANK
  UNFREEZE: 27, //	UNFREEZE
  //DEPOSIT_BANK_TRANSFER_IBANKING : 31, //	DEPOSIT BY BANK TRANSFER IBANKING
  //DEPOSIT_BANK_TRANSFER_SMS_BANKING : 32, //	DEPOSIT BY BANK TRANSFER SMS BANKING
  //DEPOSIT_BANK_TRANSFER_STANDING_ORDER : 33, //	DEPOSIT BY BANK TRANSFER STANDING ORDER
  //DEPOSIT_TRANSFER_BANK_OFFICE : 34, //	DEPOSIT BY TRANSFER AT BANK OFFICE
  //DEPOSIT_TRANSFER_ATM : 35, //	DEPOSIT BY TRANSFER AT ATM
  //DEPOSIT_IBANKING : 41, //	DEPOSIT FROM IBANKING
  //MOBILEMONEY
  MM_DEPOSIT_FROM_WALLET: 104, //	MMONEY - DEPOSIT FROM WALLET
  MM_TRANSFER_MMONEY: 109, //	MMONEY - TRANSFER MMONEY
  MM_PAYMENT: 110, //	MMONEY - PAYMENT BY MMONEY
  MM_WITHDRAW_TO_WALLET: 113, //	MMONEY - WITHDRAW TO WALLETP
  MM_TRANSFER_TO_WALLET: 114, // MMONEY - TRANSFER TO WALLET
  MM_REFUND: 115, //	MMONEY - REFUND
  MM_RECOVERY: 116, //	MMONEY - RECOVERY
  MM_FREEZE: 117, //	MMONEY - FREEZE
  MM_CHARGE_FEE: 118,
  MM_UNFREEZE: 127, //	MMONEY - UNFREEZE"
}
export const VALIDATE_STATUS = {
  SUCCESS: 0,
  WARNING: 1,
  ERROR: 2,
}
// MESSAGE_ACTION
export const SOCKET_ACTION = {
  HANDLE_TRANS_MULTI_RESULT: 'HANDLE_TRANS_MULTI_RESULT',
}

// endregion
// region ResponseCode
export const RESPONSE_CODE = {
  SUCCESS: 0,
  PAYMENT_ORDER_QUESTIONABLE: -100999,// giao dịch nghi vấn
  PAYMENT_TRANSACTION_ERROR: -100001, //Giao dịch thất bại

  ERROR: -1,
  LOGIN_REQUEST_OTP: -52,
  LOCK_ACCOUNT: -10010,

  REQUIRE_CONFIRM_BANK: -100303, // yêu cầu otp bank
  REQUIRE_OTP: -10021, // yêu cầu otp ví
  REQUIRE_WALLET_PASSWORD: -10006, // yêu cầu mật khẩu ví

  MAX_OTP_FAILED: -10105, // OTP không đúng, quá số lần cho phép
  BANK_OTP_INVALID: -10191, // OTP không đúng, giao dịch hết hiệu lực
}
// endregion
// region executionStatus
export const EXECUTION_STATUS = {
  INIT: 0,
  SUCCESS: 1,
  FAIL: 2,
  UNKNOWN: -1,
}
// endregion
// region Mockup
export const USER_PROCESS_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99,
}
export const TRANSACTION_STATUS = {
  WAITING: 0,
  APPROVED: 1,
  REJECTED: 2,
}
export const PROCESS_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99,
}

// endregion
// region PAGE
export const PAGES = {
  HOME: {
    NAME: 'home',
    PATH: '/',
  },
  IDENTITY: {
    NAME: 'identity-info',
    PATH: '/identity-info',
  },
  RESULT_TRANSACTION: {
    NAME: 'result-transaction',
    PATH: '/result-transaction',
  },
  TRANSACTION_MANAGE: {
    NAME: 'transaction-manage',
    PATH: '/transaction-manage',
  },
  TRANSACTION_HISTORY: {
    NAME: 'transaction-history',
    PATH: '/transaction-history',
  },
  TERM_OF_USE: {
    NAME: 'term-of-use',
    PATH: '/term-of-use',
  },
  ADD_LINK: {
    NAME: 'add-link',
    PATH: '/add-link',
  },
  SUPPORT: {
    NAME: 'support',
    PATH: '/support',
  },
  ABOUT_US: {
    NAME: 'about-us',
    PATH: '/about-us',
  },
  CONTACT: {
    NAME: 'contact',
    PATH: '/contact',
  },
  POLICY: {
    NAME: 'policy',
    PATH: '/policy',
  },
  PHONE_CARD: {
    NAME: 'phone-card',
    PATH: '/phone-card',
  },
  PREPAID: {
    NAME: 'prepaid',
    PATH: '/prepaid',
  },
  POSTPAID: {
    NAME: 'post-paid',
    PATH: '/post-paid',
  },
  PHONE_DATA: {
    NAME: 'phone-data',
    PATH: '/phone-data',
  },
  CARD_DATA: {
    NAME: 'card-data',
    PATH: '/card-data',
  },
  ELECTRIC_BILL: {
    NAME: 'electric-bill',
    PATH: '/electric-bill',
  },
  WATER_BILL: {
    NAME: 'water-bill',
    PATH: '/water-bill',
  },
  INTERNET_BILL: {
    NAME: 'internet-bill',
    PATH: '/internet-bill',
  },
  TELEVISION_BILL: {
    NAME: 'television-bill',
    PATH: '/television-bill',
  },
  SERVICE_RECHARGE: {
    NAME: 'service-recharge',
    PATH: '/service-recharge',
  },
  APARTMENT_FEE: {
    NAME: 'apartment-fee',
    PATH: '/apartment-fee',
  },
  EDUCATION_FEE: {
    NAME: 'education-fee',
    PATH: '/education-fee',
  },
  DEPOSIT: {
    NAME: 'deposit',
    PATH: '/deposit',
  },
  TRANSFER_WALLET: {
    NAME: 'transfer-wallet',
    PATH: '/transfer-wallet',
  },
  TRANSFER_MULTIPLE: {
    NAME: 'transfer-multiple',
    PATH: '/transfer-multiple',
  },
  WITHDRAW_FROM_MM: {
    NAME: 'withdraw-from-mm',
    PATH: '/withdraw-from-mm',
  },
  DEPOSIT_TO_MM: {
    NAME: 'deposit-to-mm',
    PATH: '/deposit-to-mm',
  },
  LINK_BANK: {
    NAME: 'link-bank',
    PATH: '/link-bank',
  },
  WITHDRAW: {
    NAME: 'withdraw',
    PATH: '/withdraw',
  },

  REPORT_SUMMARY: {
    NAME: 'report-summary',
    PATH: '/report-summary',
  },
  REPORT_DETAIL: {
    NAME: 'report-detail',
    PATH: '/report-detail',
  },
  LIMIT_SETTING: {
    NAME: 'limit-setting',
    PATH: '/limit-setting',
  },

  LOGIN: {
    NAME: 'login',
    PATH: '/login',
  },
  FORGOT_PASSWORD: {
    NAME: 'forgot-password',
    PATH: '/forgot-password',
  },
  NOT_PERMISSION: {
    NAME: 'not-permission',
    PATH: '/not-permission',
  },

  DEPOSIT_EDIT: {
    NAME: 'deposit-edit',
    PATH: '/deposit-edit',
  },
  WITHDRAW_EDIT: {
    NAME: 'withdraw-edit',
    PATH: '/withdraw-edit',
  },
  TRANSFER_WALLET_EDIT: {
    NAME: 'transfer_wallet-edit',
    PATH: '/transfer_wallet-edit',
  },
  DEPOSIT_MM_EDIT: {
    NAME: 'deposit-mm-edit',
    PATH: '/deposit-mm-edit',
  },
  WITHDRAW_MM_EDIT: {
    NAME: 'withdraw-mm-edit',
    PATH: '/withdraw-mm-edit',
  },
  TRANSFER_MULTIPLE_EDIT: {
    NAME: 'transfer-multiple-edit',
    PATH: '/transfer-multiple-edit',
  },
  TEST: {
    NAME: 'test',
    PATH: '/test',
  },
}
export const PAYMENT_GROUP_PAGES = [
  PAGES.PHONE_CARD.NAME,
  PAGES.PREPAID.NAME,
  PAGES.POSTPAID.NAME,
  PAGES.PHONE_DATA.NAME,
  PAGES.CARD_DATA.NAME,
  PAGES.ELECTRIC_BILL.NAME,
  PAGES.WATER_BILL.NAME,
  PAGES.INTERNET_BILL.NAME,
  PAGES.TELEVISION_BILL.NAME,
  PAGES.SERVICE_RECHARGE.NAME,
  PAGES.APARTMENT_FEE.NAME,
  PAGES.EDUCATION_FEE.NAME,
]
export const TRANSFER_GROUP_PAGES = [
  PAGES.TRANSFER_WALLET.NAME,
  PAGES.TRANSFER_MULTIPLE.NAME,
  // PAGES.WITHDRAW_FROM_MM.NAME,
  // PAGES.DEPOSIT_TO_MM.NAME,
]
export const BREADCRUMB_DATA = {
  HOME: [
    { ID: 1, LABEL: 'Trang chủ', PATH: null },
  ],
  IDENTITY: [
    { ID: 2, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 3, LABEL: 'Thông tin định danh', PATH: null },
  ],
  MOBILE_MONEY: [
    { ID: 6, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 7, LABEL: 'Chuyển tiền Mobifone Money', PATH: null },
  ],
  TRANSACTION_MANAGE: [
    { ID: 8, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 9, LABEL: 'Quản lý yêu cầu', PATH: null },
  ],
  TRANSACTION_HISTORY: [
    { ID: 10, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 11, LABEL: 'Lịch sử giao dịch', PATH: null },
  ],
  SUPPORT: [
    { ID: 14, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 15, LABEL: 'Trợ giúp', PATH: null },
  ],
  LINK_BANK: [
    { ID: 16, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 17, LABEL: 'Liên kết', PATH: null },
  ],
  TRANSFER: [
    { ID: 20, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 21, LABEL: 'Chuyển tiền', PATH: null },
  ],
  WITHDRAW: [
    { ID: 22, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 23, LABEL: 'Rút tiền', PATH: null },
  ],
  WITHDRAW_EDIT: [
    { ID: 2200, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 2300, LABEL: 'Sửa yêu cầu rút tiền', PATH: null },
  ],
  PHONE_CARD: [
    { ID: 24, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 25, LABEL: 'Mua mã thẻ', PATH: null },
  ],
  PREPAID: [
    { ID: 26, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 27, LABEL: 'Nạp tiền điện thoại trả trước', PATH: null },
  ],
  POSTPAID: [
    { ID: 28, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 29, LABEL: 'Nạp trả sau', PATH: null },
  ],
  PHONE_DATA: [
    { ID: 30, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 31, LABEL: 'Nạp data', PATH: null },
  ],
  CARD_DATA: [
    { ID: 32, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 33, LABEL: 'Mã thẻ data', PATH: null },
  ],
  ELECTRIC_BILL: [
    { ID: 34, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 35, LABEL: 'Hóa đơn tiền điện', PATH: null },
  ],
  WATER_BILL: [
    { ID: 36, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 37, LABEL: 'Hóa đơn tiền nước', PATH: null },
  ],
  INTERNET_BILL: [
    { ID: 38, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 39, LABEL: 'Hóa đơn internet', PATH: null },
  ],
  TELEVISION_BILL: [
    { ID: 40, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 41, LABEL: 'Hóa đơn truyền hình', PATH: null },
  ],
  SERVICE_RECHARGE: [
    { ID: 40, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 41, LABEL: 'Nạp dịch vụ', PATH: null },
  ],
  APARTMENT_FEE: [
    { ID: 42, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 43, LABEL: 'Phí chung cư', PATH: null },
  ],
  EDUCATION_FEE: [
    { ID: 44, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 45, LABEL: 'Học phí', PATH: null },
  ],
  DEPOSIT: [
    { ID: 46, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 47, LABEL: 'Nạp tiền', PATH: null },
  ],
  DEPOSIT_EDIT: [
    { ID: 4600, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 4700, LABEL: 'Sửa yêu cầu nạp tiền', PATH: null },
  ],
  TRANSFER_WALLET: [
    { ID: 48, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 49, LABEL: 'Chuyển tiền ví', PATH: null },
  ],
  TRANSFER_MULTIPLE: [
    { ID: 50, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 51, LABEL: 'Chuyển tiền theo lô', PATH: null },
  ],
  TRANSFER_MULTIPLE_EDIT: [
    { ID: 50, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 51, LABEL: 'Sửa lệnh chuyển tiền theo lô', PATH: null },
  ],
  WITHDRAW_FROM_MM: [
    { ID: 52, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 53, LABEL: 'Rút tiền TK tiền di động', PATH: null },
  ],
  WITHDRAW_FROM_MM_EDIT: [
    { ID: 5200, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 5300, LABEL: 'Sửa yêu cầu rút tiền TK tiền di động', PATH: null },
  ],
  DEPOSIT_TO_MM: [
    { ID: 54, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 55, LABEL: 'Nạp tiền TK tiền di động', PATH: null },
  ],
  DEPOSIT_TO_MM_EDIT: [
    { ID: 5400, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 5500, LABEL: 'Sửa yêu cầu nạp tiền TK tiền di động', PATH: null },
  ],
  TERM_OF_USE: [
    { ID: 56, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 57, LABEL: 'Điều khoản sử dụng', PATH: null },
  ],
  ABOUT_US: [
    { ID: 58, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 59, LABEL: 'Giới thiệu', PATH: null },
  ],
  CONTACT: [
    { ID: 60, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 61, LABEL: 'Liên hệ', PATH: null },
  ],
  POLICY: [
    { ID: 62, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 63, LABEL: 'Chính sách', PATH: null },
  ],
  ADD_LINK: [
    { ID: 64, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 65, LABEL: 'Thêm liên kết', PATH: null },
  ],

  REPORT_SUMMARY: [
    { ID: 64, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 65, LABEL: 'Báo cáo tổng hợp', PATH: null },
  ],
  REPORT_DETAIL: [
    { ID: 64, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 65, LABEL: 'Báo cáo chi tiết', PATH: null },
  ],
  LIMIT_SETTING: [
    { ID: 64, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 65, LABEL: 'Cài đặt hạn mức', PATH: null },
  ],
  RESULT_TRANSACTION: [
    { ID: 66, LABEL: 'Trang chủ', PATH: PAGES.HOME.PATH },
    { ID: 67, LABEL: 'Kết quả giao dịch', PATH: null },
  ],
}
export const HOME_WIDGET_DATA = [
  {
    ID: 1,
    NUMBER: 440,
    ICON: ICONS.SUCCESS,
    LABEL: 'Đã duyệt',
    TOP_COLOR: '#28A745',
    BOTTOM_COLOR: '#228E3B',
  },
  {
    ID: 2,
    NUMBER: 800,
    ICON: ICONS.WAITING,
    LABEL: 'Đang chờ duyệt',
    TOP_COLOR: '#FFC107',
    BOTTOM_COLOR: '#D9A406',
  },
  {
    ID: 3,
    NUMBER: 100,
    ICON: ICONS.REJECT,
    LABEL: 'Từ chối',
    TOP_COLOR: '#DC3545',
    BOTTOM_COLOR: '#BB2D3B',
  },
]
export const SERVICES_DATA = [
  {
    ID: 1,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE1,
    ICON_SMALL: ICONS.SERVICE_SMALL1,
    SERVICE_NAME: 'Mã thẻ',
    DESCRIPTION: 'Mua mã thẻ di động',
    PATH: PAGES.PHONE_CARD.PATH,
  },
  {
    ID: 2,
    BADGE_NUMBER: 0,
    ICON: ICONS.SERVICE2,
    ICON_SMALL: ICONS.SERVICE_SMALL2,
    SERVICE_NAME: 'Nạp tiền',
    DESCRIPTION: 'Thanh toán di động trả trước',
    PATH: PAGES.PREPAID.PATH,
  },
  {
    ID: 3,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE3,
    ICON_SMALL: ICONS.SERVICE_SMALL3,
    SERVICE_NAME: 'Trả sau',
    DESCRIPTION: 'Thanh toán di động trả sau',
    PATH: PAGES.POSTPAID.PATH,
  },
  {
    ID: 4,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE4,
    ICON_SMALL: ICONS.SERVICE_SMALL4,
    SERVICE_NAME: 'Nạp data',
    DESCRIPTION: 'Mua dung lượng data mobile internet',
    PATH: PAGES.PHONE_DATA.PATH,
  },
  {
    ID: 5,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE5,
    ICON_SMALL: ICONS.SERVICE_SMALL5,
    SERVICE_NAME: 'Mã thẻ data',
    DESCRIPTION: 'Mua mã thẻ gói data 3G/4G',
    PATH: PAGES.CARD_DATA.PATH,
  },
  {
    ID: 6,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE6,
    ICON_SMALL: ICONS.SERVICE_SMALL6,
    SERVICE_NAME: 'Điện',
    DESCRIPTION: 'Thanh toán tiền điện',
    PATH: PAGES.ELECTRIC_BILL.PATH,
  },
  {
    ID: 7,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE7,
    ICON_SMALL: ICONS.SERVICE_SMALL7,
    SERVICE_NAME: 'Nước',
    DESCRIPTION: 'Thanh toán tiền nước nhanh chóng',
    PATH: PAGES.WATER_BILL.PATH,
  },
  {
    ID: 8,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE8,
    ICON_SMALL: ICONS.SERVICE_SMALL8,
    SERVICE_NAME: 'Internet',
    DESCRIPTION: 'Thanh toán cước Internet',
    PATH: PAGES.INTERNET_BILL.PATH,
  },
  {
    ID: 9,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE9,
    ICON_SMALL: ICONS.SERVICE_SMALL9,
    SERVICE_NAME: 'Truyền hình',
    DESCRIPTION: 'Thanh toán cước truyền hình',
    PATH: PAGES.TELEVISION_BILL.PATH,
  },
  {
    ID: 10,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE10,
    ICON_SMALL: ICONS.SERVICE_SMALL10,
    SERVICE_NAME: 'Nạp dịch vụ',
    DESCRIPTION: 'Nạp tiền dịch vụ',
    PATH: PAGES.SERVICE_RECHARGE.PATH,
  },
  {
    ID: 11,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE11,
    ICON_SMALL: ICONS.SERVICE_SMALL11,
    SERVICE_NAME: 'Phí chung cư',
    DESCRIPTION: 'Thanh toán phí chung cư',
    PATH: PAGES.APARTMENT_FEE.PATH,
  },

  {
    ID: 12,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE12,
    ICON_SMALL: ICONS.SERVICE_SMALL12,
    SERVICE_NAME: 'Học phí',
    DESCRIPTION: 'Thanh toán học phí',
    PATH: PAGES.EDUCATION_FEE.PATH,
  },
]
export const TRANSFERS = [
  {
    ID: 1,
    ICON: ICONS.TRANSFER1,
    LABEL: 'Chuyển tiền Ví',
    PATH: PAGES.TRANSFER_WALLET.PATH,
    ROLES: [ROLES.INITTRANSFERPERSONAL, ROLES.INITTRANSFERMM, ROLES.INITTRANSFERENTERPRISE],
  },
  {
    ID: 2,
    ICON: ICONS.TRANSFER2,
    LABEL: 'Chuyển tiền theo lô',
    PATH: PAGES.TRANSFER_MULTIPLE.PATH,
    ROLES: [ROLES.INITTRANSFERMULTI],
  },
  // {
  //   ID: 3,
  //   ICON: ICONS.TRANSFER3,
  //   LABEL: 'Rút tiền TK tiền di động',
  //   PATH: PAGES.WITHDRAW_FROM_MM.PATH,
  //   ROLES: [ROLES.INITWITHDRAWMM],
  // },
  // {
  //   ID: 4,
  //   ICON: ICONS.TRANSFER4,
  //   LABEL: 'Nạp tiền TK tiền di động',
  //   PATH: PAGES.DEPOSIT_TO_MM.PATH,
  //   ROLES: [ROLES.INITDEPOSITMM],
  // },
]
export const THEME_LIST = [
  {
    name: 'blue',
    borderRadius: '8px',
    solidColor: '#0465B0',
    solidLightColor: 'rgb(233, 245, 254)',
    gradientColor: 'linear-gradient(108.88deg, #04BEFE 0%, #4481EB 100%)',
    shadowColor: '0 2px 10px rgba(68, 129, 235, 0.5)',
    lightShadowColor: '0 2px 4px rgba(61, 147, 190, 0.24), 0 4px 8px rgba(61, 153, 190, 0.16)',
  },
  // {
  //   name: 'pink',
  //   borderRadius: '8px',
  //   solidColor: 'rgb(244, 67, 54)',
  //   solidLightColor: 'rgb(254, 237, 235)',
  //   gradientColor: 'linear-gradient(108.84deg, #F77062 0%, #FE5196 100%)',
  //   shadowColor: '0 2px 10px rgba(254, 81, 150, 0.5)',
  //   lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  // },
  {
    name: 'green',
    borderRadius: '8px',
    solidColor: '#3DBEA3',
    solidLightColor: '#ecf9f6',
    gradientColor: 'linear-gradient(167.51deg, #2ECF94 24.37%, #3DBEA3 78.07%)',
    shadowColor: '0 2px 10px rgba(46,207,148,0.6)',
    lightShadowColor: '0 2px 4px rgba(61, 190, 163, 0.24), 0 4px 8px rgba(61, 190, 163, 0.16)',
  },
  {
    name: 'violet',
    borderRadius: '8px',
    solidColor: 'rgb(229,46,113)',
    solidLightColor: 'rgba(229,46,113, .2)',
    gradientColor: 'linear-gradient(to top left,#ff8a00,#e52e71)',
    shadowColor: '0px 2px 10px rgba(229,46,113, 0.5)',
    lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  },
  {
    name: 'black',
    borderRadius: '8px',
    solidColor: 'rgb(70, 70, 70)',
    solidLightColor: 'rgb(200, 200, 200)',
    gradientColor: 'linear-gradient(108.88deg, rgb(121, 121, 121) 0%, rgb(70, 70, 70) 100%)',
    shadowColor: '0px 2px 10px rgba(70, 70, 70, 0.5)',
    lightShadowColor: '0 2px 4px rgba(0, 0, 0, 0.22), 0 4px 8px rgba(0, 0, 0, 0.04)',
  },
]
export const DEVICE = {
  MOBILE: 'MOBILE', // width <= 767px
  TABLET: 'TABLET', // 768px <= width <= 1023px
  DESKTOP: 'DESKTOP', // width >= 1024px
}
export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAskgPKBcNpz71mi4NSYa5
    mazJrO0WZim7T2yy7qPxk2NqQE7OmWWakLJcaeUYnI0kO3yC57vck66RPCjKxWuW
    SGZ7dHXe0bWb5IXjcT4mNdnUIalR+lV8czsoH/wDUvkQdG1SJ+IxzW64WvoaCRZ+
    /4wBF2cSUh9oLwGEXiodUJ9oJXFZVPKGCEjPcBI0vC2ADBRmVQ1sKsZg8zbHN+gu
    U9rPLFzN4YNrCnEsSezVw/W1FKVS8J/Xx4HSSg7AyVwniz8eHi0e3a8VzFg+H09I
    5wK+w39sjDYfAdnJUkr6PjtSbN4/Sg/NMkKB2Ngn8oj7LCfe/7RNqIdiS+dQuSFg
    eQIDAQAB
    -----END PUBLIC KEY-----`
// endregion





