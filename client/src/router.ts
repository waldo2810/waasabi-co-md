// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/admin`
  | `/admin/posts`
  | `/admin/posts/new`
  | `/auth`
  | `/recent-thoughts`
  | `/recent-thoughts/:id/page`

export type Params = {
  '/recent-thoughts/:id/page': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
