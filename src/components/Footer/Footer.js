import './Footer.css';
const Footer=(()=>{
    return(
            <div className="footerContainer">
                <div className="container"> 
                    <div className="footer">
                        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                        < span className="copyrightText">Copy Rights Reserved 2022</span>
                    </div>
                </div>
            </div>
                
       
    )
});

export default Footer;