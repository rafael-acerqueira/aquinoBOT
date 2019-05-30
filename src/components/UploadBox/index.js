import React from 'react'
import UploadButton from './UploadButton'

const UploadBox = ({ handleUpload }) => (
	<>
		<label htmlFor='upload'><UploadButton /></label>
		<input 
			onChange={handleUpload}
			id='upload' 
			type='file' 
			style={{ display: 'none'}}
			multiple
		/>
	</>
)

export default UploadBox