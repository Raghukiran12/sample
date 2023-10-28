import React from 'react'
import './login.css'
import ImgAsset from '../public'
export default function Login () {
	return (
		<div className='login_login'>
			<div className='faangledown'>
				<div className='Group'>
					<img className='Vector' src = {ImgAsset.login_Vector} />
				</div>
			</div>
			<div className='Group1'>
				<div className='signal'>
					<img className='Vector_1' src = {ImgAsset.login_Vector_1} />
				</div>
				<img className='Battery' src = {ImgAsset.login_Battery} />
				<div className='wifi'>
					<img className='Vector_2' src = {ImgAsset.login_Vector_2} />
				</div>
				<span className='_609PM'>6:09 PM</span>
			</div>
			<div className='Group16'>
				<span className='EnglishIndia'>English (India)</span>
			</div>
			<div className='Group17'>
				<img className='Myproject2' src = {ImgAsset.Home_Myproject2} />
				<img className='Rectangle18' src = {ImgAsset.login_Rectangle18} />
				<div className='Group11'>
					<div className='Rectangle16'/>
					<span className='Phonenumberemailorusername'>Phone number, email or username</span>
				</div>
				<div className='Group12'>
					<div className='Rectangle16_1'/>
				</div>
				<span className='ForgotyourlofindetailsGethelploggingin'>Forgot your lofin details? Get help logging in.</span>
				<span className='Login'>Log in</span>
				<div className='Group15'>
					<span className='OR'>OR</span>
					<img className='Vector3' src = {ImgAsset.login_Vector3} />
					<img className='Vector4' src = {ImgAsset.login_Vector4} />
				</div>
				<div className='Group14'>
					<div className='entyposocialfacebookwithcircle'>
						<div className='Group_1'>
							<img className='Vector_3' src = {ImgAsset.login_Vector_3} />
						</div>
					</div>
					<span className='LoginwithFacebook'>Login with Facebook<br/></span>
				</div>
			</div>
			<div className='Group13'>
				<div className='Rectangle19'/>
				<span className='DonthaveanaccountSignup'>Don’t have an account? Sign up.</span>
			</div>
		</div>
	)
}