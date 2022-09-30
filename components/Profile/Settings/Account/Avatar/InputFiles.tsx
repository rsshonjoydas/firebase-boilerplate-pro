/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import useModal from '../../../../../hooks/useModal';
import Img from '../../../../Img';
import Modal from '../../../../Modal';
import ModalImages from './ModalImages';

interface IProps {
  files: (File | string)[];
  setFiles: (files: (File | string)[]) => void;
  multiple?: boolean;
}

const InputFiles: React.FC<IProps> = ({ files, setFiles, multiple }) => {
  const { modalOpen, close, open } = useModal();

  const checkImages = (fls: FileList) => {
    const newFiles: File[] = [];

    Array.from(fls).map((file) => {
      if (!file) return toast.error('File does not exist.');

      const types = ['image/png', 'image/jpeg', 'image/gif'];
      if (!types.includes(file.type)) {
        return toast.error('The image type is png / jpeg / gif.');
      }

      if (file.size > 1024 * 1024) {
        return toast.error('The largest image size is 1mb.');
      }

      return newFiles.push(file);
    });
    setFiles(newFiles);
  };

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;
    const file = target.files;
    if (!file) return;

    checkImages(file);
  };

  const removeImage = (i: number) => {
    const newArr = files.filter((_, index) => index !== i);
    setFiles(newArr);
  };

  const showImage = (url: string, index: number) => (
    <div key={index} className='flex flex-col items-center'>
      <Img
        src={url}
        height={48}
        width={48}
        alt='avatar'
        className='object-cover w-12 h-12 mx-1 border rounded-full'
      />
      <FontAwesomeIcon
        onClick={() => removeImage(index)}
        icon={faTrashCan}
        className='my-2 cursor-pointer'
      />
    </div>
  );

  const allowDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const dropFiles = dt.files;
    console.log('🚀 ~ file: InputFiles.tsx ~ line 58 ~ drop ~ dropFiles', dropFiles);
    if (!files) return;
    checkImages(dropFiles);
  };

  return (
    <div className='w-full my-3'>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          multiple={multiple}
          setFiles={setFiles}
          type='dropIn'
          handleClose={close}
        >
          <ModalImages files={files} setFiles={setFiles} handleClose={close} />
        </Modal>
      )}
      <div
        onDrop={drop}
        onDragOver={allowDrag}
        className='flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-600'
      >
        <div className='space-y-1 text-center'>
          <div className='flex justify-center'>
            {!files.length && (
              <svg
                className='w-12 h-12 mx-auto text-gray-400'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'
              >
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}

            {files.map((file, index) =>
              typeof file === 'string'
                ? showImage(file, index)
                : showImage(URL.createObjectURL(file), index)
            )}
          </div>

          <h4>Drag and drop your files anywhere or</h4>
          <div className='flex justify-center text-sm text-gray-600'>
            <label
              htmlFor='formFileMultiple'
              className='inline-block pt-0.5 dark:text-purple-400 cursor-pointer form-label'
            >
              Upload a file
              <input
                className='form-control sr-only block px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='file'
                id='formFileMultiple'
                accept='.jpg, .png, .gif'
                multiple
                onChange={handleChange}
              />
            </label>
            <p className='pl-1'>or</p>
            <p
              className='pl-1 font-semibold text-red-500 cursor-pointer dark:text-red-400'
              onClick={open}
            >
              My Storage
            </p>
          </div>
          <p className='text-xs dark:text-gray-300'>PNG, JPG, GIF up to 1MB</p>
        </div>
      </div>
    </div>
  );
};

export default InputFiles;
