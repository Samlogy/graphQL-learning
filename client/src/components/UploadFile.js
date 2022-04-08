import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { useMutation } from "@apollo/client";

import { SINGLE_UPLOAD, MULTIPLE_UPLOAD } from '../services'

export const UploadFile = () => {
  return (
    <div >
      <UploadSingle />
      <UploadMultiple />
    </div>
  );
};

const UploadSingle = () => {
  const [uploadSingleFile, { loading, error, data }] = useMutation(SINGLE_UPLOAD, {
    onCompleted: (data) => console.log('success: ', data),
    onError: (data) => console.log('error: ', data)
  });

  const onDrop = useCallback(acceptedFile => {
    console.log(acceptedFile)
    if (acceptedFile) uploadSingleFile({ variables: { file: acceptedFile[0] } })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple: false})

  // const onUploadSingleFile = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return 
  //   uploadSingleFile({ variables: { file } })
  // }

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>{JSON.stringify(error, null, 2)}</div>;

  return(
    <>
      <h3> Upload Single File </h3>
      {/* <input type="file" required onChange={onUploadSingleFile} /> */}
      <div {...getRootProps()} style={{ border: '1px solid', width: 'fit-content', padding: '.5rem', borderRadius: '5px' }}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <br />
      {/* {Object.keys(lastUploaded).length !== 0 && (
        <div>
          {" "}
          Last uploaded details => {JSON.stringify(lastUploaded, null, 2)}{" "}
        </div>
      )} */}
    </>
  )
}

const UploadMultiple = () => {
  const [uploadMultipleFiles, { loading, error, data }] = useMutation(MULTIPLE_UPLOAD, {
    onCompleted: (data) => console.log('succes: ', data),
    onError: (data) => console.log('error: ', data)
  });

  // const onUploadMultipleFiles = (e) => {
  //   const file = e.target.files
  //   if (!file || file.length === 0) return 
  //   uploadMultipleFiles({ variables: { file } })
  // }

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles) uploadMultipleFiles({ variables: { file: acceptedFiles } })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>{JSON.stringify(error, null, 2)}</div>;

  return(
    <>
      <h3> Upload Multiple Files </h3>
      {/* <input type="file" required onChange={onUploadMultipleFiles} multiple={true} /> */}
      <div {...getRootProps()} style={{ border: '1px solid', width: 'fit-content', padding: '.5rem', borderRadius: '5px' }}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <br />
    </>
  )
}