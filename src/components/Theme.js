import  React,{useState} from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { changeTheme } from '../features/notes/themeReducer';
import { useDispatch } from 'react-redux';


export default function Theme() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [theme,setTheme]=useState("light");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const changeClr = (color) =>{
    setTheme(color);
   dispatch(changeTheme(color));
  }

  const lightBtn={    
    borderRadius:'50%',
    padding:'15px',
    backgroundColor:'#EED1ED',
    color:'#521950',
    fontWeight:'bold',
   

};
const darkBtn={    
  borderRadius:'50%',
  padding:'15px',
  backgroundColor:'#521950',
  color:'white',
  fontWeight:'bold',
};

if(theme === "light")
{
  lightBtn.border ='3px solid #E056E0';
  lightBtn.borderColor='#E056E0';
  lightBtn.boxShadow= '0 0 10px #E056E0';
}
else
{
  darkBtn.border ='3px solid #EED1ED';
  darkBtn.borderColor='#EED1ED';
  darkBtn.boxShadow= '0 0 10px #EED1ED';
}





  return (
    <div>
      <Button style={{borderRadius:'50%',padding:'30px'}} size="large" aria-describedby={id} variant="contained" onClick={handleClick}>
          
      </Button>

<Popover


  anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
>
<Grid container 
  style={{padding:'10px',width:'100px',height:'200px',backgroundColor:theme==="light"?'white':'#673667E8'}}

  direction="column"
  justifyContent="space-evenly"
  alignItems="center">
<Button style={lightBtn} size="small" onClick={()=>changeClr('light')}>
          Light
          </Button>
          <Button style={darkBtn} size="small"  onClick={()=>changeClr('dark')}>
          Dark
          </Button>
          </Grid> 
</Popover>

    </div>
  );
}
