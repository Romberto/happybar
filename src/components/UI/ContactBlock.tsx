import { Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactBlock = () => {
    const phoneNumber = '+79284518100'
    const handlePhone = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }

    return (
        <div>
            <div className="w-36 flex gap-x-3">
                    <Button variant="contained" sx={{ backgroundColor:"var(--colora)"}} onClick={handlePhone}><PhoneIcon sx={{color: '#fff'}}/></Button>
                    <Button variant="contained" sx={{ backgroundColor:"var(--colora)"}} onClick={handleWhatsApp}><WhatsAppIcon sx={{color: '#fff'}}/></Button>
                </div>
        </div>
    );
}

export default ContactBlock;
