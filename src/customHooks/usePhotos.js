import { useState, useEffect } from "react";

import { PhotosService } from "../apis/photos.service";

export const usePhotos = ({ rover, camera, sol, date }) => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (photos.length < page * 25 && hasNextPage && rover) {
      PhotosService.getPhotos({ rover, camera, date, page, sol })
        .then(({ data }) => {
          data.photos.length < 25 && setHasNextPage(false);
          if (data.photos.length) setPhotos([...photos, ...data.photos]);
        })
        .finally(() => setLoading(false));
    }
  }, [rover, camera, page, photos, date, hasNextPage, sol]);

  return { photos, hasNextPage, loading, page, setPage };
};
