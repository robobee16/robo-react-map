import { map } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";
import { Host } from "../interfaces/env";
import { $PortalStore } from "@services/store.service";

class ApiService {
  getHash() {
    const url = `${Host.BitBucketMaster}?t=${new Date().getTime().toString()}`;
    return fromFetch(url, {
      selector: (response) => response.json(),
    }).pipe(
      map((res) => {
        $PortalStore.BitBucketImagesHash = res.target.hash;
        return res.target.hash;
      })
    );
  }
}

export const $API = new ApiService();
