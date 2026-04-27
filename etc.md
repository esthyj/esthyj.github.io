# Yeeun Jeon — Portfolio Source

> github.io 본문에 사용할 콘텐츠 원본입니다. 사이트 갱신 시 이 파일을 단일 출처(SSOT)로 사용합니다.

---

## About
데이터사이언스 전공의 AI 엔지니어. **RAG·LLM Agent·시계열 예측**을 주력으로 연구하고 있습니다. 

---

## Education
**Hanyang University** — B.S. in Data Science
2021.03 – 2025.08
- 주요 과목: 확률통계론, 자료구조론, 머신러닝1, 머신러닝2, 알고리즘및문제해결기법, 지능형로보틱스, 인간컴퓨터상호작용, 인공지능, 데이터사이언스, 컴퓨터비전

---

## Experience

### 삼성전자 — 장기현장실습 (혁신센터)
**2024.03.06 – 2024.06.21**

- **AMR(Autonomous Mobile Robot) 최적 대기 위치 산정 및 분석**
  - 새로운 대기 위치 산정 알고리즘 제안 → 기존 대비 *Unloading Transport Time* 및 전체 반송 시간 감소
- **OHT(Overhead Hoist Transport) 데이터 분석 및 Section 통과 시간 예측**
  - 다수 시계열 모델을 비교 평가, *Temporal Fusion Transformer*가 베이스라인 대비 우수한 MAE 기록 → 운영 활용 가능성 제시

> ★ 혁신센터에서 함께 근무한 동기 8명 중 종합 평가 1위로 **우수 인턴**에 선발

---

### 한화손해보험 — 인턴 (디지털AI센터)
**2025.01.13 – 2025.02.28**

- 보험설계사를 위한 **RAG 기반 챗봇** 개발
- *Document Parsing → Chunking → Retrieval → LLM Generation → RAG Evaluation* 전 과정 직접 구현하며 RAG 아키텍처 전반 이해
- *Query Transformation*, *Ensemble Retrieval*, *Prompt Engineering* 등 고도화 기법을 자동차 보험 문서 도메인에 맞춰 최적화

> **RAG Accuracy 62.3% (Naïve) → 96.6% (Final Architecture)** 로 개선

---

### 삼성전자 — 장기현장실습 (AI센터)
**2025.03.04 – 2025.05.30**

- DS Assistant 내 **Query Rewrite 모듈** 직접 구현
- 이전 대화와 마지막 질문을 바탕으로 두 종류의 쿼리를 동시에 생성
  - *Retrieval Query* — 핵심 키워드 중심 쿼리
  - *Generation Query* — 독립적이고 자연스러운 문장형 쿼리
- 쿼리 → 문서 리랭킹 → Generation Query 기반 답변 생성 파이프라인 구축
- **모델 선정 기준:** Time to First Token(TTFT)이 짧은 LLM 활용 (사용자 체감 응답 속도 우선)
- **최적화:** 사용자 데이터 기반 평가셋을 직접 구축, Retrieve / Rerank 문서 수를 변화시키며 *Recall*·*nDCG* 측정

---

### 한화손해보험 — AI Engineer (AI리서치센터)
**2025.06.02 – 재직 중** 

- **사내 리포트 작성 AI Agent** 개발
- *최신 기사 검색* (타 금융사 AI 사업 동향) → *LLM 기반 요약·인사이트 도출* (보험사 관점) → *사내 리포트 템플릿 자동 정리* 의 End-to-End 파이프라인 구축

---

## Publications

**Digital Health Sensor Data in Autism: Developing Few-Shot Learning Approaches for Traditional Machine Learning Classifiers**
*IEEE, 2024* · [ieeexplore.ieee.org/document/10780502](https://ieeexplore.ieee.org/abstract/document/10780502/)

- **SMOTE_FSL** — 랜덤 포레스트, SVM 등 전통적 머신러닝 모델을 소량 데이터로도 효과적으로 학습시키기 위해 새롭게 고안한 데이터 증강(Data Augmentation) 알고리즘
- **기존 SMOTE와의 차이:** 기존 SMOTE는 소수 클래스 데이터의 *분포 내부 범위*에서만 합성 데이터를 생성하지만, 임상 데이터처럼 표본 크기가 매우 작은 경우 수집된 데이터가 질병 전체의 특성을 대변한다고 보기 어려움. SMOTE_FSL은 *padding* 파라미터를 활용한 **Statistical Inversion** 기법을 통해 합성 데이터가 원본 데이터 범위를 *초과*하여 생성될 수 있도록 의도적으로 허용

---

## Awards
- **한국장학재단 대통령과학장학생** — 2024.02.16

---

## Certifications
| 자격증명 | 레벨 | 취득일 / 유효기간 |
|---|---|---|
| **SQLD** | 합격 | 2024.06.21 – |
| **AdSP** | 합격 | 2024.09.06 – |
| **OPIc** | Intermediate High | 2026.02.23 – 2028.02.22 |

---

## Contact
- **Name** Yeeun Jeon (전예은)
- **Email** esthyj@naver.com
- **Phone** +82 10-2468-7535
- **GitHub** [github.com/esthyj](https://github.com/esthyj)
- **LinkedIn** [linkedin.com/in/yeeun-jeon-belu](https://www.linkedin.com/in/yeeun-jeon-belu/)
