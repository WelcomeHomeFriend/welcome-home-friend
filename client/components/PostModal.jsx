import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ petObj }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More Information</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style ={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
            Help Find {petObj.pet_name}!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p>Contact owner at:{petObj.phone_number}</p>
          <p>Owner Address is:{petObj.address}</p>
          <p>Additional Comments:{petObj.comments}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
