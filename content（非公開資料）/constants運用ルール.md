\# 【資料⑤】AIMC constants運用ルール（確定版）



\## 🎯 目的

AIMC応募サイト／審査員サイト／管理画面の開発において、ルーティング・SKU・テーブル名・メール・i18nキー等を一元管理し、事故や混乱を防止する。



---



\# 1. constants の定義方針



\### ■ 誤解されがちな旧表現

「constants.js に一元管理」



\### ■ 正しい正式ルール

> constants ＝ \\\*\\\*1フォルダ一元管理\\\*\\\*  

> 1ファイルではなく \\\*\\\*複数ファイルに分割管理してよい\\\*\\\*（ただし命名・責任範囲固定）



---



\# 2. フォルダ構成（固定）



```

/constants

│

├── routes.ts       # ROUTE\\\_\\\*（画面URL）

├── stripe.ts       # SKU / Price / CheckoutURL / Webhook

├── supabase.ts     # TABLE\\\_\\\* / EDGE\\\_\\\* / RPC\\\_\\\* / Storage bucket

├── i18n.ts         # 文言キー一覧（キーのみ）

├── meta.ts         # 競技年度 / 応募期間 / 国籍リスト

└── email.ts        # メールテンプレのキー・テンプレID

```



📌 \*\*追加ファイルは事前承認必須\*\*

📌 \*\*constantsフォルダ以外への定数保管は禁止\*\*



---



\# 3. ファイル責任範囲



\### 3-1. routes.ts

\- ROUTE\_\*（画面URL）

\- JSX に文字列直書き禁止 → `router.push(ROUTE\\\_APPLY)`



\### 3-2. stripe.ts

\- 料金・SKU・Plan・Webhook・Success/Cancel URL

\- `"9800"` を直書き禁止



\### 3-3. supabase.ts

\- TABLE名・Edge Function名・RPC名・Storage bucket名

\- `from('entries')` の直書き禁止



\### 3-4. i18n.ts

\- UI文言キー / エラーキー / ローディングキー

\- JSX に `"Payment Success"` 直書き禁止



\### 3-5. meta.ts

\- 年度 / 応募期間 / 国籍リスト

\- `"2025"` 直書き禁止



\### 3-6. email.ts

\- メールテンプレID

\- 本文は \*\*別のメールテンプレ資料\*\* に保存



---



\# 4. 命名ルール



\### 4-1. 画面URL

```

ROUTE\\\_APPLY

ROUTE\\\_PAYMENT

ROUTE\\\_RESULT\\\_2025

```



\### 4-2. Stripe SKU

```

SKU\\\_ENTRY\\\_VIOLIN\\\_2025

SKU\\\_ENTRY\\\_PIANO\\\_2025

```



\### 4-3. Supabase

```

TABLE\\\_ENTRY

TABLE\\\_JUDGE

TABLE\\\_RESULT

EDGE\\\_PARSE\\\_VIDEO

```



\### 4-4. i18nキー

```

screen.apply.title

screen.apply.submit

payment.success.message

result.2025.winner

```



📌 年度入りは例外的に許可

📌 翌年は年度部分のみ置換



---



\# 5. importルール（固定）



```

import { ROUTE\\\_APPLY } from '@/constants/routes'

import { TABLE\\\_ENTRY } from '@/constants/supabase'

import { SKU\\\_ENTRY\\\_VIOLIN\\\_2025 } from '@/constants/stripe'

```



禁止：



```

import { ROUTE\\\_APPLY } from '../constants'

import { ROUTE\\\_APPLY } from './routes'

```



---



\# 6. constants追加／修正の承認フロー



\### 新規追加

```

① 追加理由

② 利用画面

③ import先

④ 想定影響

⑤ 命名根拠

```



→ \*\*資料化 → ダブルチェック → 承認 → 実装\*\*



\### 修正

```

① 修正理由

② 影響範囲

③ 一括置換が安全か

```



---



\# 7. 絶対禁止



❌ JSX内に英語直書き

❌ `router.push('/apply')`

❌ Supabaseテーブル名直書き

❌ SKU / 料金直書き

❌ importパス揺れ

❌ constantsフォルダ外への定義



---



\# 8. 年度更新ルール



1\. 年度は `meta.ts` に持つ

2\. i18nキーは必要部分のみ年度差替え

3\. Stripe SKUは年度ごとに別追加

4\. constants運用書を更新してからコード変更



---



\# 9. ChatGPTコード提出時の自己チェック



```

【constantsチェック】

\\- ROUTE/ TABLE/ SKU/ i18n の直書きなし

\\- '@/constants/\\\*' からimport

\\- 年度直値なし（meta参照）

\\- i18nキー存在

\\- 一括置換可能

```



---



\# 10. 本資料の位置づけ



\- \*\*constants運用に関する“法律”\*\*

\- 開発ルール集（憲法）とは別に管理

\- 修正はすべて \*\*資料更新 → 承認 → 適用\*\*



---



\# END

\# 【資料⑤】AIMC constants運用ルール（確定版）



\## 🎯 目的

AIMC応募サイト／審査員サイト／管理画面の開発において、ルーティング・SKU・テーブル名・メール・i18nキー等を一元管理し、事故や混乱を防止する。



---



\# 1. constants の定義方針



\### ■ 誤解されがちな旧表現

「constants.js に一元管理」



\### ■ 正しい正式ルール

> constants ＝ \\\*\\\*1フォルダ一元管理\\\*\\\*  

> 1ファイルではなく \\\*\\\*複数ファイルに分割管理してよい\\\*\\\*（ただし命名・責任範囲固定）



---



\# 2. フォルダ構成（固定）



```

/constants

│

├── routes.ts       # ROUTE\\\_\\\*（画面URL）

├── stripe.ts       # SKU / Price / CheckoutURL / Webhook

├── supabase.ts     # TABLE\\\_\\\* / EDGE\\\_\\\* / RPC\\\_\\\* / Storage bucket

├── i18n.ts         # 文言キー一覧（キーのみ）

├── meta.ts         # 競技年度 / 応募期間 / 国籍リスト

└── email.ts        # メールテンプレのキー・テンプレID

```



📌 \*\*追加ファイルは事前承認必須\*\*

📌 \*\*constantsフォルダ以外への定数保管は禁止\*\*



---



\# 3. ファイル責任範囲



\### 3-1. routes.ts

\- ROUTE\_\*（画面URL）

\- JSX に文字列直書き禁止 → `router.push(ROUTE\\\_APPLY)`



\### 3-2. stripe.ts

\- 料金・SKU・Plan・Webhook・Success/Cancel URL

\- `"9800"` を直書き禁止



\### 3-3. supabase.ts

\- TABLE名・Edge Function名・RPC名・Storage bucket名

\- `from('entries')` の直書き禁止



\### 3-4. i18n.ts

\- UI文言キー / エラーキー / ローディングキー

\- JSX に `"Payment Success"` 直書き禁止



\### 3-5. meta.ts

\- 年度 / 応募期間 / 国籍リスト

\- `"2025"` 直書き禁止



\### 3-6. email.ts

\- メールテンプレID

\- 本文は \*\*別のメールテンプレ資料\*\* に保存



---



\# 4. 命名ルール



\### 4-1. 画面URL

```

ROUTE\\\_APPLY

ROUTE\\\_PAYMENT

ROUTE\\\_RESULT\\\_2025

```



\### 4-2. Stripe SKU

```

SKU\\\_ENTRY\\\_VIOLIN\\\_2025

SKU\\\_ENTRY\\\_PIANO\\\_2025

```



\### 4-3. Supabase

```

TABLE\\\_ENTRY

TABLE\\\_JUDGE

TABLE\\\_RESULT

EDGE\\\_PARSE\\\_VIDEO

```



\### 4-4. i18nキー

```

screen.apply.title

screen.apply.submit

payment.success.message

result.2025.winner

```



📌 年度入りは例外的に許可

📌 翌年は年度部分のみ置換



---



\# 5. importルール（固定）



```

import { ROUTE\\\_APPLY } from '@/constants/routes'

import { TABLE\\\_ENTRY } from '@/constants/supabase'

import { SKU\\\_ENTRY\\\_VIOLIN\\\_2025 } from '@/constants/stripe'

```



禁止：



```

import { ROUTE\\\_APPLY } from '../constants'

import { ROUTE\\\_APPLY } from './routes'

```



---



\# 6. constants追加／修正の承認フロー



\### 新規追加

```

① 追加理由

② 利用画面

③ import先

④ 想定影響

⑤ 命名根拠

```



→ \*\*資料化 → ダブルチェック → 承認 → 実装\*\*



\### 修正

```

① 修正理由

② 影響範囲

③ 一括置換が安全か

```



---



\# 7. 絶対禁止



❌ JSX内に英語直書き

❌ `router.push('/apply')`

❌ Supabaseテーブル名直書き

❌ SKU / 料金直書き

❌ importパス揺れ

❌ constantsフォルダ外への定義



---



\# 8. 年度更新ルール



1\. 年度は `meta.ts` に持つ

2\. i18nキーは必要部分のみ年度差替え

3\. Stripe SKUは年度ごとに別追加

4\. constants運用書を更新してからコード変更



---



\# 9. ChatGPTコード提出時の自己チェック



```

【constantsチェック】

\\- ROUTE/ TABLE/ SKU/ i18n の直書きなし

\\- '@/constants/\\\*' からimport

\\- 年度直値なし（meta参照）

\\- i18nキー存在

\\- 一括置換可能

```



---



\# 10. 本資料の位置づけ



\- \*\*constants運用に関する“法律”\*\*

\- 開発ルール集（憲法）とは別に管理

\- 修正はすべて \*\*資料更新 → 承認 → 適用\*\*



---



\# END

