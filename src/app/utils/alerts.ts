import { retry } from "rxjs";
import Swal from "sweetalert2";

const swalInfo = (text: string) => {
    Swal.fire({
        icon: "info",
        text: text,
        showConfirmButton: false,
        timer: 1500
      });
}

export {swalInfo}