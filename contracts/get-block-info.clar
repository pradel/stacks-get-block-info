
;; get-block-info
;; <add a description here>

(define-read-only (get-block-info-time (block-height-expr uint))
  (get-block-info? time block-height-expr))

(define-read-only (get-block-info-header-hash (block-height-expr uint))
  (get-block-info? header-hash block-height-expr))

(define-read-only (get-block-info-burnchain-header-hash (block-height-expr uint))
  (get-block-info? burnchain-header-hash block-height-expr))

(define-read-only (get-block-info-id-header-hash (block-height-expr uint))
  (get-block-info? id-header-hash block-height-expr))
