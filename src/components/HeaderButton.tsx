import { Typography } from "antd"

import { HeaderButtonProps } from "../models/models"

const headerButtonStyle: React.CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   color: 'black',
   backgroundColor: '#F5F5F5',
   borderBottom: 'none',
   cursor: 'pointer'
}



const HeaderButton: React.FC<HeaderButtonProps> = ({ label, icon, link }) => {

   return (
      <div style={headerButtonStyle}>
         <div><img src={icon} alt={label} /></div>
         <Typography.Text style={{ fontSize: 16, fontWeight: 400 }}>{label}</Typography.Text>
      </div>

   )
}

export default HeaderButton

/**
 * 
 * <Button style={headerButtonStyle} type="primary" icon={<IconComponent />}>
         {label}
      </Button>
 */