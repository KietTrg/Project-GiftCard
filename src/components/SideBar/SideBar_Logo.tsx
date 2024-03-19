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
    <Space className='m-4 flex gap-3 items-center'>
      <Image preview={false} width='54px' src='../images/Icon_Dashboard.png'></Image>
      <Typography.Title style={{ color: 'white' }} level={3}>GIFTCARD</Typography.Title>
    </Space>
  )
}

export default SideLogo