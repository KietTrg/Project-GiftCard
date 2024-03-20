//node_modules
import { Image, Space, Typography } from 'antd'
//components
//actions
//selector
//function
//constants
//styled
const SideLogo = () => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Space className='m-4 flex md:flex-col gap-3 items-center md:justify-center'>
      <Image preview={false} width='54px' src='../images/Icon_Dashboard.png'></Image>
      <Typography.Title className='sm:hidden' style={{ color: 'white' }} level={3}>GIFTCARD</Typography.Title>
    </Space>
  )
}

export default SideLogo