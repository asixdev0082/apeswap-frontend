/** @jsxImportSource theme-ui */
import React from 'react'
import { Button } from '@ape.swap/uikit'
import { useWalletModal } from '@apeswapfinance/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
  const { large, table } = props

  const LargeButton = () => {
    return (
      <Button
        onClick={onPresentConnectModal}
        sx={{
          fontWeight: 700,
          fontSize: '20px',
          width: '100%',
          height: '60px',
          borderRadius: '20px !important',
          marginTop: '10px',
        }}
        {...props}
      >
        {t('UNLOCK WALLET')}
      </Button>
    )
  }

  const TableButton = () => {
    return (
      <Button
        onClick={onPresentConnectModal}
        sx={{
          fontSize: '16px',
          fontWeight: 700,
          padding: '10px 20px',
          minWidth: '227px',
          height: '44px',
        }}
        {...props}
      >
        {t('UNLOCK WALLET')}
      </Button>
    )
  }

  return large ? (
    <LargeButton />
  ) : table ? (
    <TableButton />
  ) : (
    <Button
      onClick={onPresentConnectModal}
      sx={{ fontSize: '16px', padding: '0 24px', height: '44px', fontWeight: 600 }}
      {...props}
    >
      {t('UNLOCK WALLET')}
    </Button>
  )
}

export default UnlockButton
