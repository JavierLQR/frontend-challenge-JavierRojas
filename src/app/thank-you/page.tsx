'use client'

import { useEffect, useState } from 'react'

import { useLogoutMutation } from '@/modules/auth/services/mutation'
import { toast } from 'sonner'
import { CheckCircle, LogOut } from 'lucide-react'
import { Profile } from './types/signup'

export default function ThankYouPage() {
  const [data, setData] = useState<Profile | null>(null)
  const { mutate } = useLogoutMutation()

  useEffect(() => {
    const stored = localStorage.getItem('signup-data')
    if (stored) {
      setData(JSON.parse(stored))
      toast.success(`¡Bienvenido, ${data?.name || 'Usuario'} `, {
        id: 'signup-success',
      })
    }
  }, [data?.name])

  const handleLogout = () => mutate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/20">
        <div className="mb-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-light text-slate-800 mb-2">
            ¡Bienvenido!
          </h1>
          <p className="text-sm text-slate-500">
            Tu registro se completó exitosamente
          </p>
        </div>

        {data ? (
          <div className="mb-8 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
            <p className="text-lg font-medium text-slate-800 mb-1">
              {data.name}
            </p>
            <p className="text-sm text-slate-500">{data.email}</p>
          </div>
        ) : (
          <div className="mb-8 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-400">
              No se encontraron datos del usuario
            </p>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="group w-full bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-medium text-sm shadow-lg hover:shadow-xl"
        >
          <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
