import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SINGLE_UPLOAD } from '../services'

export const UploadFile = () => {
  const [lastUploaded, setLastUploaded] = useState({});
  const [uploadSingleFile, { loading, error, data }] = useMutation(SINGLE_UPLOAD);
  // const onChange = ({
  //   target: {
  //     validity, files: [file]
  //   }
  // }) => validity.valid && uploadSingleFile({ variables: { file } });
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return 
    uploadSingleFile({ variables: { file } })
    console.log(file)
  }

  useEffect(() => {
    if (data)
      setLastUploaded(data.singleUpload);
  }, [data]);

  if (loading)
    return <div>Loading...</div>;
  if (error)
    return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <>
      <input type="file" required onChange={onChange} />
      <br />
      {Object.keys(lastUploaded).length !== 0 && (
        <div>
          {" "}
          Last uploaded details => {JSON.stringify(lastUploaded, null, 2)}{" "}
        </div>
      )}
    </>
  );
};
