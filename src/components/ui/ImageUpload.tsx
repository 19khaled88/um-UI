// 'use client'
// import React, { useState } from 'react';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { Flex, message, Upload } from 'antd';
// import type { GetProp, UploadProps } from 'antd';
// import Image from 'next/image';

// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

// const getBase64 = (img: FileType, callback: (url: string) => void) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result as string));
//   reader.readAsDataURL(img);
// };

// const beforeUpload = (file: FileType) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };

// interface UploadImageProps {
//   onImageUpload?:(url:string) => void;
// }

// const UploadImage: React.FC<UploadImageProps> = ({onImageUpload}) => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState<string>();

//   const handleChange: UploadProps['onChange'] = (info) => {
//     if (info.file.status === 'uploading') {
//       setLoading(true);
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj as FileType, (url) => {
//         setLoading(false);
//         setImageUrl(url);
//         if(onImageUpload){
//           onImageUpload(url)
//         }
//       });
//     }
//   };

//   const uploadButton = (
//     <button style={{ border: 0, background: 'none' }} type="button">
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </button>
//   );

//   const handleCustomRequest = async ({ file, onSuccess, onError }: any) => {
//     try {

//       setTimeout(()=>{
//         onSuccess("ok")
//       },0)
//     } catch (error) {
//       onError(error);
//     }
//   };

//   return (
//     <Flex gap="middle" wrap>
//       <Upload
//         customRequest={handleCustomRequest}
//         name="admin.profileImage"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}

//         // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"

//         beforeUpload={beforeUpload}
//         onChange={handleChange}
//       >
//         {imageUrl ? <Image src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload>

//     </Flex>
//   );
// };

// export default UploadImage;

import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, message, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadImage: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
   
  ]);

  const handlePreview = async (file: UploadFile) => {
    try {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as FileType);
      }

      setPreviewImage(file.url || (file.preview as string));
      setPreviewOpen(true);
    } catch (error) {
      console.error("Preview failed", error);
      message.error('Failed to preview image');

      // set file status to error 
      setFileList((prevList) =>
        prevList.map((f) => (f.uid === file.uid ? { ...f, status: 'error' } : f))
      );
    }
  };

  const handleChange: UploadProps["onChange"] = ({file, fileList: newFileList }) => {
    console.log(file)
    if(file.status === 'error'){
      message.error(`${file.name} upload falied.`);
    }
    setFileList(newFileList);
  }

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Upload
        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
          alt="No Image"
        />
      )}
    </>
  );
};

export default UploadImage;
