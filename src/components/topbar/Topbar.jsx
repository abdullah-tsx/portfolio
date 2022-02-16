import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import './Topbar.scss';

const Topbar = ({ isMenuOpen, onOpen: setIsMenuOpen }) => {
	return (
		<div className={`topbar ${isMenuOpen && 'open'}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						abdullah.
					</a>
					<div className="itemContainer">
						<PersonIcon className="icon" />
						<span>+971 505 053 369</span>
					</div>
					<div className="itemContainer">
						<EmailIcon className="icon" />
						<span>abdullah.ryk94@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setIsMenuOpen(prev => !prev)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Topbar;