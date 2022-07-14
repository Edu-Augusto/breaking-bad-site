import { useEffect, useState } from 'react'
import {Container, Image, Text, ImageModal} from './styles'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


interface PropsCard{
  img:string,
  name:string,
  apelido:string,
  ator:string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  background:'#242323d8',
  color: 'white',
  textAlign:'center'
};

const Card = (props:PropsCard) => {
  const [teste, setTeste] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
      setTeste(false);
      setOpen(false);
  }


  useEffect(()=>{
    console.log(props.img)
  })
  console.log(props.img)
  return (
    <>
      <Container onMouseOver={() => setTeste(true)} onMouseOut={()=> setTeste(false)}>
        <Image src={props.img} alt={props.name}></Image>
        <Text hover={teste} onClick={handleOpen}>Ver mais</Text>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ImageModal src={props.img} alt={props.name}></ImageModal>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Nome do personagem : {props.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Nome do ator: {props.ator}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Apelido na série: {props.apelido}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </Container>
    </>
  )
}

export default Card