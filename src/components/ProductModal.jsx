import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

export default function ProductModal({tempProduct ,closeModal}) {
  
  const modalRef = useRef(null)

  useEffect(() => {
    modalRef.current = new Modal(document.querySelector('#modalRef'))
  }, [])

  useEffect(() => {
    if( tempProduct ) {
      modalRef.current.show()
    } else {
      modalRef.current.hide()
    }
  }, [tempProduct])

  return (
    <div className="modal fade" id="modalRef" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel"> { tempProduct?.title } </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> closeModal()}></button>
          </div>
          <div className="modal-body d-flex  justify-content-between">
            <div className='w-35'>
              <div className='modal-main-img mb-3'>
                <img src={ tempProduct?.imageUrl } alt="" />
              </div>
              <div className='d-flex'>
                { tempProduct?.imagesUrl.map( ( image ) => (
                  <img
                    src={ image }
                    alt={ tempProduct?.description }
                    key={ image }
                    className='w-30 me-2 object-cover'
                  />
                ) ) }
              </div>
            </div>
            <div className='w-60 d-flex flex-column justify-content-between'>
              <div>
                <h4 className='mb-3'>品名：{ tempProduct?.title }</h4>
                <h5 className='mb-3'>分類：{ tempProduct?.category }</h5>
                <p>尺寸：{tempProduct?.content}</p>
                <p>{tempProduct?.description}</p>
                <p>可訂購數量：{ tempProduct?.num } { tempProduct?.unit }</p>
              </div>
              <div>
              <p className='text-end mb-0'>原價：<del>{ tempProduct?.origin_price }</del> 元</p>
              <p className='text-end mb-0'>售價：{ tempProduct?.price } 元</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> closeModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}