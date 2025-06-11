import React from 'react'
import CustomButton from './CustomButton';

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container '>
      <div className="flex-1 flex flex-col ">
        <input 
        id='file-upload' 
        type="file" 
        accept='image/*'
        onChange={(e) => setFile (e.target.files[0])}
        />

        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? "No image selected." : file.name}
        </p>

        <div className="mt-2 w-[150px] h-[100px] flex items-center justify-center overflow-hidden rounded border border-white/20 bg-white/10">
  {file && (
    <img
      src={URL.createObjectURL(file)}
      alt="preview"
      className="max-w-full max-h-full object-contain"
    />
  )}
</div>

      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
          <CustomButton 
            type='filled'
            title="Logo"
            handleClick={() => readFile('logo')}
            customStyles="text-xs p-1 "
          />

          <CustomButton 
            type='filled'
            title="Full"
            handleClick={() => readFile('full')}
            customStyles="text-xs p-1 "
          />
        </div>

    </div>
  )
}

export default FilePicker