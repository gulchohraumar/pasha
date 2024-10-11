import { retry } from "rxjs";
import Swal from "sweetalert2";

const swalConfirm = (text: string, apartmentNumbersWithOwner?: string) => {
    let isConfirm = false;

    Swal.fire({
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#266AB8',
        cancelButtonColor: 'red',
        confirmButtonText: 'Bəli',
        cancelButtonText: 'Geri'
    }).then((result) => {
        if (result.isConfirmed) {
           isConfirm = true
        }
    })
    return isConfirm;
}

export {swalConfirm}