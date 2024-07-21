
export type BaseQueryArgs = {
   body: string
}

export type BaseQueryResult = {
   data: unknown
}

export type CustomError = {
   status: string
   error: any
}

export interface ProductDataResponse {
   data: IData
}

export interface IData {
   barcode: Barcode
}

export interface Barcode {
   archived: boolean
   barcodeValue: string
   category: Category
   characteristic: any
   cost: any
   createdAt: string
   deleted: boolean
   description: string
   discountedPrice: any
   id: string
   images: Image[]
   mute: boolean
   sellingPrice: number
   sizes: Sizes
   slug: string
   tags: any
   title: string
}

export interface Category {
   icon: string
   icon1: string
   id: string
   inTrend: boolean
   isActive: boolean
   level: number
   lft: number
   name: string
   parent: Parent
   prioritization: number
   rght: number
   slug: string
   treeId: number
}

export interface Parent {
   icon: string
   icon1: string
   id: string
   inTrend: boolean
   isActive: boolean
   level: number
   lft: number
   name: string
   prioritization: number
   rght: number
   slug: string
   treeId: number
}

export interface Image {
   id: string
   url: string
}

export interface Sizes {
   edges: Edge[]
}

export interface Edge {
   node: Node
}

export interface Node {
   id: string
   name: string
   value: number
}

export interface HeaderButtonProps {
   label: string
   link: string
   icon: string
}

export type TMenuItem = {
   key: string
   label: string
   icon?: React.ReactNode
}

export interface IReview {
   id: number
   name: string
   review_text: string
   date: string
}

export interface IProduct {
   id: number
   name: string
   title: string
   reviews: number
   price: number
   img: string
}

export const queryBarcode = `
   query Barcode {
      barcode(id: 365) {
         id
         barcodeValue
         title
         description
         deleted
         sellingPrice
         slug
         archived
         createdAt
         mute
         discountedPrice
         cost
         tags
         characteristic
         category {
            id
            name
            slug
            icon
            icon1
            isActive
            prioritization
            inTrend
            lft
            rght
            treeId
            level
            parent {
               id
               name
               slug
               icon
               icon1
               isActive
               prioritization
               inTrend
               lft
               rght
               treeId
               level
            }
         }
         images {
            id
            url
         }
         sizes {
            edges {
               node {
                  id
                  name
                  value
               }
            }
         }
      }
   }
`