import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SINGLE_UPLOAD, MULTIPLE_UPLOAD } from '../services'

export const UploadFile = () => {
  return (
    <div style={{ border: '1px solid', width: 'fit-content', padding: '.5rem', borderRadius: '5px' }}>
      <UploadSingle />
      <UploadMultiple />
    </div>
  );
};

const UploadSingle = () => {
  const [lastUploaded, setLastUploaded] = useState({});
  const [uploadSingleFile, { loading, error, data }] = useMutation(SINGLE_UPLOAD, {
    onCompleted: (data) => console.log('success: ', data),
    onError: (data) => console.log('error: ', data)
  });

  const onUploadSingleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return 
    uploadSingleFile({ variables: { file } })
  }

  // useEffect(() => {
  //   if (data)
  //     setLastUploaded(data.singleUpload);
  // }, [data]);

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>{JSON.stringify(error, null, 2)}</div>;

  return(
    <>
      <h2> Upload Single File </h2>
      <input type="file" required onChange={onUploadSingleFile} />
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
  const [lastUploaded, setLastUploaded] = useState({});
  // , { loading, error, data }
  const [uploadMultipleFiles, { loading, error, data }] = useMutation(MULTIPLE_UPLOAD, {
    onCompleted: (data) => console.log('succes: ', data),
    onError: (data) => console.log('error: ', data)
  });

  const onUploadMultipleFiles = (e) => {
    const file = e.target.files
    if (!file || file.length === 0) return 
    uploadMultipleFiles({ variables: { file } })
  }

  // useEffect(() => {
  //   if (data)
  //     setLastUploaded(data.singleUpload);
  // }, [data]);

  if (loading)
    return <div>Loading...</div>;
  // if (error)
  //   return <div>{JSON.stringify(error, null, 2)}</div>;

  return(
    <>
      <h2> Upload Multiple Files </h2>
      <input type="file" required onChange={onUploadMultipleFiles} multiple={true} />
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
