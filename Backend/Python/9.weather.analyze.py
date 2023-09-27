# %%
import weather_api as wtapi

# 사용자로부터 데이터 입력 받기
startDT = input('시작일(yyyymmdd): ') # 시작일
endDT = input('종료일(yyyymmdd): ') # 종료일

# 지역명으로 지점코드 조회
loc_name = input('지역을 입력하세요: ')

stnIds = wtapi.loc_code_sch(loc_name)
weather_df = wtapi.weather_exit(startDT, endDT, stnIds)

weather_df.info()


# %%
###################
# 날씨 데이터 분석 #
###################

# %%
#데이터 가져오기
import pandas as pd
import numpy as np

wt_df = pd.read_csv('./data/weather_seoul.csv', encoding='utf-8')
wt_df.info()

# %%
# 필요한 데이터만 추출
df = wt_df[['tm', 'stnNm', 'avgTa', 'minTa', 'maxTa', 'sumRn', 'iscs']]
df.info()

# %%
df.head()


################
# 데이터 전처리 #
################

# %%
# 결측치 확인(null, NaN, None)
df.isnull().sum()


# %%
# 결측치 다른 값으로 대체
df[df['sumRn']=='']

# %%
