import React, { ChangeEvent, FC, useState } from 'react';
import PDFMerger from 'pdf-merger-js/browser';

import { Button } from '../../../components/Button';
import { Loader } from '../../../components/Loader';

import styles from './Merger.module.scss';

export const Merger: FC = () => {
  const [files, setFiles] = useState<File[] | null>([]);

  const onFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const [loading, setLoading] = useState(false);

  const onClick = (): void => {
    if (files?.length) {
      setLoading(true);

      const render = async (): Promise<void> => {
        const merger = new PDFMerger();

        await Promise.all(files.map(async (file) => merger.add(file)));

        const mergedPdf = await merger.saveAsBlob();
        const url = URL.createObjectURL(mergedPdf);

        setLoading(false);
        window.open(url, '_blank');
      };

      render().catch((err) => {
        setLoading(false);
        throw err;
      });
    }
  };

  return (
    <>
      {loading && <Loader />}
      <form className={styles.Merger}>
        <input type='file' multiple onChange={onFileInputChange} />
        <Button onClick={onClick} disabled={loading || !!files?.length}>
          DO SOME MAGIC SHIT!
        </Button>
      </form>
    </>
  );
};
