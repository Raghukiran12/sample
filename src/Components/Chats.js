import React from 'react'
import './Chats.css'
import ImgAsset from '../public'
export default function Chats () {
	return (
		<div className='Chats_Chats'>
			<div className='Group1'>
				<div className='signal'>
					<img className='Vector' src = {ImgAsset.Chats_Vector} />
				</div>
				<img className='Battery' src = {ImgAsset.Chats_Battery} />
				<div className='wifi'>
					<img className='Vector_1' src = {ImgAsset.Chats_Vector_1} />
				</div>
				<span className='_609PM'>6:09 PM</span>
			</div>
			<div className='Group2'>
				<div className='Rectangle1'/>
				<div className='akariconschevrondown'>
					<div className='Group'>
						<div className='Group_1'>
							<img className='Vector_2' src = {ImgAsset.Chats_Vector_2} />
						</div>
					</div>
				</div>
				<span className='movie24'>movie24</span>
				<div className='akariconsplus'>
					<div className='Group_2'>
						<img className='Vector_3' src = {ImgAsset.Chats_Vector_3} />
					</div>
				</div>
				<div className='carbonvideoadd'>
					<img className='Vector_4' src = {ImgAsset.Chats_Vector_4} />
					<img className='Vector_5' src = {ImgAsset.Chats_Vector_5} />
				</div>
			</div>
			<div className='biarrowdown'>
				<div className='Group_3'>
					<div className='Group_4'>
						<img className='Vector_6' src = {ImgAsset.Chats_Vector_6} />
					</div>
				</div>
			</div>
			<div className='Group26'>
				<div className='Rectangle35'/>
				<div className='carbonsearch'>
					<img className='Vector_7' src = {ImgAsset.Chats_Vector_7} />
				</div>
				<span className='Search'>Search</span>
			</div>
			<span className='Messages'>Messages</span>
			<span className='Requests'>Requests</span>
			<div className='Group27'>
				<div className='Rectangle36'/>
				<span className='music24'>music24</span>
				<span className='sent10hago'>sent 10h ago</span>
				<div className='icoutlinephotocamera'>
					<img className='Vector_8' src = {ImgAsset.Chats_Vector_8} />
				</div><div className='Ellipse1' style={{backgroundImage: `url(${ImgAsset.Home_Rectangle13_1})`}}/>
			</div>
		</div>
	)
}