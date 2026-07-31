# Prompt Architecture

## AI / Prompt_Architecture.md

> *Prompts are code. They are versioned, tested, reviewed, and documented with the same rigor as any other component in the system.*

---

## Core Principle

A prompt is an instruction set for an AI system. Like any instruction set, it can be written well or poorly — and the difference has direct consequences for system behavior, reliability, and safety.

At AITHORIS, prompts are not written casually. They are engineered.

---

## Prompt Layers

Every AITHORIS agent system uses a layered prompt architecture:

### Layer 1: System Prompt
Defines the agent's identity, capabilities, constraints, and behavior guidelines.

**Contains:**
- Role definition (what the agent is and does)
- Scope boundaries (what it is authorized to do)
- Prohibited behaviors (explicit prohibitions)
- Output format requirements
- Escalation triggers
- Communication style guidelines

**Version controlled:** Yes
**Change process:** Pull request with documented rationale

---

### Layer 2: Context Assembly
The dynamic content assembled at runtime that gives the agent relevant information for the current task.

**May include:**
- Relevant documents (retrieved via RAG)
- Conversation history (within token budget)
- Tool descriptions (only the tools relevant to this task)
- Current state (what has already been done in this session)
- User preferences (from session or long-term memory)

**Determinism requirement:** Context assembly must be reproducible. Given the same inputs, the assembled context must be identical.

---

### Layer 3: Task Prompt
The specific instruction for the current execution.

**Requirements:**
- Clear statement of the objective
- Success criteria (what does a successful output look like?)
- Relevant constraints (format, length, scope)
- Available context references

---

## Prompt Engineering Standards

### Be specific about outputs
Vague output instructions produce variable outputs. Define the exact format, structure, and content requirements.

```
❌ "Summarize the document."

✅ "Summarize the document in 3–5 sentences. 
    Focus on: the main business problem, the proposed solution, 
    and the stated outcome. 
    Do not include background context or author information."
```

### Define failure behavior explicitly
The agent needs to know what to do when it cannot complete a task.

```
"If the document does not contain the information needed to 
complete this task, respond with:
{ 'status': 'insufficient_data', 'missing': '[what is missing]', 
  'partial_output': '[what could be completed]' }

Do not attempt to infer or fabricate missing information."
```

### Use structured output formats
Structured outputs are reliable. Free-form text is not.

```
"Respond only with a JSON object matching this schema:
{
  'classification': 'string (one of: [defined_classes])',
  'confidence': 'number (0.0–1.0)',
  'rationale': 'string (1–2 sentences)',
  'escalate': 'boolean'
}"
```

### Test prompts against adversarial inputs
Before deploying, test:
- Inputs that are ambiguous
- Inputs that attempt to override the system prompt
- Inputs that are out of scope
- Inputs that are incomplete or malformed

---

## Prompt Versioning

All production prompts are versioned using semantic versioning:

`v{major}.{minor}.{patch}`

- **Major** — Changes to scope, role, or prohibited behaviors
- **Minor** — Additions of capabilities or output format changes
- **Patch** — Wording clarifications, format fixes

Prompt versions are stored alongside the agent code. Changes require:
- Documented rationale
- Test suite update
- Benchmark re-run confirming no performance regression

---

## Token Budget Management

| Component | Target Budget | Maximum |
|---|---|---|
| System prompt | 500–1000 tokens | 2000 tokens |
| Context assembly | 2000–4000 tokens | 6000 tokens |
| Task prompt | 200–500 tokens | 1000 tokens |
| Response | 500–2000 tokens | 4000 tokens |
| **Total** | **3200–7500 tokens** | **13000 tokens** |

Exceeding budget triggers context compression. Context compression strategy is defined per agent.

---

## AITHORIS System Prompt Template

See `PROMPTS/System_Prompt.md` for the full AITHORIS system prompt template used in client-facing agent deployments.

---

*Related documents: `AI/Agent_Framework.md` | `PROMPTS/System_Prompt.md` | `AI/Governance.md`*

---

© AITHORIS AI Repository — Prompt_Architecture.md v2.0
