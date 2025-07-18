import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../Images/researchguide.png";

export default function ResearchGuide() {
  const navigate = useNavigate();

  const youtubeVideos = [
    {
      title: "How to Write a Research Paper for Beginners",
      channel: "Academic Learnings",
      embedId: "-kguiI17880",
    },
    {
      title: "How to Start a Research Project?",
      channel: "Dr. Amina Yonis",
      embedId: "0sQjjQDj8pE",
    },
    {
      title: "How to Publish in IEEE, Springer, Elsevier",
      channel: "Research Grad",
      embedId: "tyxovwk_Fo4",
    },
    {
      title: "Research Methodology Complete Guide",
      channel: "Academic Learnings",
      embedId: "8Lzo3nhcTSk",
    },
    {
      title: "LaTeX for Research Writing (Basics)",
      channel: "Academic Learnings",
      embedId: "zqQM66uAig0",
    },
    {
      title: "How to Choose a Research Topic",
      channel: "Academic Learnings",
      embedId: "foV-wkaB8Hc",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="px-6 py-12 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-600 drop-shadow">
            📚 Ultimate Research Guide
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            From idea to publication—everything you need to begin your research journey.
          </p>
          <p className="text-base text-purple-800 font-semibold mt-3">
            Powered by <span className="underline">ResAIShala</span>
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-14">

        {/* What is a Research Paper - Expanded */}
        <section className="rounded-3xl bg-white/70 p-10 shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">🧾 What is a Research Paper?</h2>
          <p className="text-lg text-gray-700 leading-loose mb-6">
            A research paper is a structured document that investigates, analyzes, and communicates findings on a specific topic or question. It contributes new knowledge to a field by building upon existing work through systematic investigation.
          </p>
          
          <h3 className="text-2xl font-semibold text-purple-600 mb-3">Key Characteristics of Good Research:</h3>
          <ul className="list-disc list-inside mb-6 text-gray-800 space-y-2">
            <li><strong>Originality:</strong> Presents new findings or perspectives</li>
            <li><strong>Rigor:</strong> Follows systematic methodology</li>
            <li><strong>Replicability:</strong> Others can verify your results</li>
            <li><strong>Significance:</strong> Addresses an important problem</li>
            <li><strong>Clarity:</strong> Well-organized and clearly written</li>
          </ul>

          <h3 className="text-2xl font-semibold text-purple-600 mb-3">Standard Structure:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Title:</strong> Concise and descriptive (8-12 words ideal)</li>
            <li><strong>Abstract:</strong> Quick summary (150-250 words)</li>
            <li><strong>Keywords:</strong> 3-5 important terms for indexing</li>
            <li><strong>Introduction:</strong> Context, problem statement, objectives</li>
            <li><strong>Literature Review:</strong> Critical analysis of existing work</li>
            <li><strong>Methodology:</strong> Detailed research design and procedures</li>
            <li><strong>Results:</strong> Presentation of findings (often with tables/figures)</li>
            <li><strong>Discussion:</strong> Interpretation of results and implications</li>
            <li><strong>Conclusion:</strong> Summary and future research directions</li>
            <li><strong>References:</strong> Proper citations of all sources</li>
          </ul>
        </section>
        {/* Research Process Timeline */}
        <section className="bg-gradient-to-r from-purple-50 to-white p-10 rounded-3xl shadow-xl border border-purple-100">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">⏳ Research Process Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-1 bg-purple-300"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {[
                { 
                  step: "1. Topic Selection", 
                  duration: "1-2 weeks", 
                  details: "Identify gap, formulate research questions, assess feasibility" 
                },
                { 
                  step: "2. Literature Review", 
                  duration: "2-4 weeks", 
                  details: "Survey 20-50 papers, identify key theories/methods" 
                },
                { 
                  step: "3. Proposal Writing", 
                  duration: "1-2 weeks", 
                  details: "Define objectives, methodology, expected outcomes" 
                },
                { 
                  step: "4. Data Collection", 
                  duration: "Varies (1-12 weeks)", 
                  details: "Experiments, surveys, simulations based on methodology" 
                },
                { 
                  step: "5. Analysis", 
                  duration: "2-3 weeks", 
                  details: "Statistical analysis, qualitative coding, model validation" 
                },
                { 
                  step: "6. Paper Writing", 
                  duration: "3-4 weeks", 
                  details: "Draft sections, create figures/tables, refine arguments" 
                },
                { 
                  step: "7. Revision", 
                  duration: "1-2 weeks", 
                  details: "Peer feedback, improve clarity, check formatting" 
                },
                { 
                  step: "8. Submission", 
                  duration: "Ongoing", 
                  details: "Journal/conference selection, address reviewer comments" 
                },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-purple-800">{item.step}</h3>
                    <p className="text-purple-600 font-medium">{item.duration}</p>
                    <p className="text-gray-700 mt-2">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Research Papers - Expanded */}
        <section className="bg-gradient-to-r from-purple-50 to-white p-10 rounded-3xl shadow-xl border border-purple-100">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">📘 Types of Research Papers</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { 
                title: "📝 Journal Paper", 
                description: "Peer-reviewed, long format studies (typically 6-12 pages)",
                details: "Highest impact but longest review process (3-12 months). Examples: IEEE Transactions, Elsevier journals"
              },
              { 
                title: "🎤 Conference Paper", 
                description: "Shorter papers (4-8 pages) for conference presentation",
                details: "Faster publication (3-6 months), good for early career researchers. Examples: IEEE CONIT, Springer LNCS"
              },
              { 
                title: "🔍 Review Paper", 
                description: "Comprehensive survey of existing research on a topic",
                details: "Requires analyzing 50-200 papers. Often highly cited. Examples: ACM Computing Surveys"
              },
              { 
                title: "🧪 Experimental Paper", 
                description: "Presents results from lab/field experiments or simulations",
                details: "Focuses on methodology and results. Common in sciences/engineering"
              },
              { 
                title: "💡 Position Paper", 
                description: "Presents an opinion or theoretical framework",
                details: "Common in humanities. Argues for a particular viewpoint"
              },
              { 
                title: "📊 Survey Paper", 
                description: "Analyzes trends through questionnaires/interviews",
                details: "Common in social sciences. Requires rigorous sampling methods"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
                <h3 className="text-2xl font-semibold text-purple-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.description}</p>
                <p className="text-gray-600 mt-2 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose a Research Topic */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-purple-300">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">🔍 How to Choose a Research Topic</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Finding Your Topic:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Start with your <strong>interests</strong> - you'll spend months on this</li>
                <li>Look for <strong>gaps</strong> in recent survey/review papers</li>
                <li>Check <strong>future work</strong> sections of related papers</li>
                <li>Explore <strong>emerging technologies</strong> (AI, IoT, Blockchain etc.)</li>
                <li>Consider <strong>real-world problems</strong> that need solutions</li>
                <li>Talk to <strong>professors</strong> about ongoing research</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Evaluation Criteria:</h3>
              <div className="space-y-4">
                {[
                  {criteria: "Novelty", desc: "Has this been done before? How can you add new value?"},
                  {criteria: "Feasibility", desc: "Do you have access to required data/equipment/expertise?"},
                  {criteria: "Scope", desc: "Not too broad (can't complete) or narrow (not meaningful)"},
                  {criteria: "Resources", desc: "Time, funding, and supervisor availability"},
                  {criteria: "Impact", desc: "Potential to contribute to the field"},
                ].map((item, i) => (
                  <div key={i} className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700">{item.criteria}</h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">💡 Pro Tip:</h3>
            <p className="text-gray-700">
              Formulate your topic as a <strong>research question</strong> (e.g., "How does X affect Y under Z conditions?"). 
              Good questions are clear, focused, and researchable.
            </p>
          </div>
        </section>

        {/* Literature Review Deep Dive */}
        <section className="bg-purple-50 p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">📖 Mastering the Literature Review</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Search Strategies:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use <strong>Google Scholar</strong>, <strong>IEEE Xplore</strong>, <strong>ScienceDirect</strong></li>
                <li>Start with <strong>recent papers</strong> (last 5 years) then work backward</li>
                <li>Follow <strong>citation trails</strong> - check references of key papers</li>
                <li>Use <strong>Boolean operators</strong> (AND, OR, NOT) in searches</li>
                <li>Set up <strong>alerts</strong> for new papers on your topic</li>
                <li>Look for <strong>survey/review papers</strong> in your area</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">Organization Tools:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {name: "Zotero", desc: "Reference manager with browser plugin"},
                  {name: "Mendeley", desc: "PDF organizer with social features"},
                  {name: "EndNote", desc: "Advanced citation management"},
                  {name: "Notion", desc: "Flexible workspace for notes"},
                ].map((tool, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-bold text-purple-700">{tool.name}</h4>
                    <p className="text-gray-600 text-sm">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Critical Reading Approach:</h3>
              <div className="space-y-4">
                {[
                  {step: "1. Skim", desc: "Read abstract, intro, conclusion first to assess relevance"},
                  {step: "2. Question", desc: "What problem does this solve? What methods are used?"},
                  {step: "3. Analyze", desc: "Strengths/weaknesses? Limitations? How does it compare?"},
                  {step: "4. Connect", desc: "How does this relate to other papers? Your work?"},
                  {step: "5. Synthesize", desc: "Group papers by themes/methods/findings"},
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-bold text-purple-700">{item.step}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold text-purple-700 mt-6 mb-4">Literature Review Structure:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Introduction</strong> to the field</li>
                <li><strong>Theoretical framework</strong> (key concepts/models)</li>
                <li><strong>Methodological approaches</strong> used in the field</li>
                <li><strong>Key findings</strong> from prior research</li>
                <li><strong>Gaps</strong> and unresolved problems</li>
                <li><strong>Your contribution</strong> in context</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">🔬 Research Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Quantitative Methods</h3>
              <div className="space-y-4">
                {[
                  {method: "Experiments", desc: "Controlled tests with variables"},
                  {method: "Surveys", desc: "Structured questionnaires"},
                  {method: "Simulations", desc: "Computer models of systems"},
                  {method: "Data Mining", desc: "Analyzing large datasets"},
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700">{item.method}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Qualitative Methods</h3>
              <div className="space-y-4">
                {[
                  {method: "Case Studies", desc: "In-depth analysis of specific instances"},
                  {method: "Interviews", desc: "Open-ended discussions with participants"},
                  {method: "Ethnography", desc: "Observation in natural settings"},
                  {method: "Content Analysis", desc: "Systematic coding of texts/media"},
                ].map((item, i) => (
                  <div key={i} className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700">{item.method}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Methodology Section Essentials</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Research design type",
                "Participants/sample size",
                "Data collection tools",
                "Procedures in detail",
                "Data analysis methods",
                "Validity/reliability measures",
                "Ethical considerations",
                "Limitations",
              ].map((item, i) => (
                <div key={i} className="bg-purple-50 p-3 rounded-lg text-center font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">📊 Statistical Analysis Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {name: "SPSS", type: "General stats"},
                {name: "R", type: "Advanced analysis"},
                {name: "Python", type: "Pandas, SciPy"},
                {name: "Excel", type: "Basic analysis"},
                {name: "MATLAB", type: "Engineering"},
                {name: "NVivo", type: "Qualitative"},
                {name: "Tableau", type: "Visualization"},
                {name: "Stata", type: "Econometrics"},
              ].map((tool, i) => (
                <div key={i} className="bg-white p-2 rounded text-center text-sm shadow-sm">
                  <div className="font-bold">{tool.name}</div>
                  <div className="text-gray-600">{tool.type}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing and Structure Tips */}
        <section className="bg-gradient-to-r from-purple-50 to-white p-10 rounded-3xl shadow-xl border border-purple-100">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">✍️ Academic Writing Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Writing Style</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use <strong>formal, precise</strong> language (no contractions)</li>
                <li>Write in <strong>third person</strong> ("The study shows..." not "I found...")</li>
                <li>Be <strong>concise</strong> - avoid unnecessary words</li>
                <li>Use <strong>hedging</strong> where appropriate ("may suggest" vs "proves")</li>
                <li>Define <strong>acronyms</strong> at first use</li>
                <li>Use <strong>active voice</strong> where possible ("We analyzed" vs "Analysis was performed")</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Paragraph Structure</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                <p className="font-medium text-purple-700">1. Topic Sentence</p>
                <p className="text-gray-700 text-sm">Introduces the main idea</p>
                
                <p className="font-medium text-purple-700 mt-3">2. Supporting Sentences</p>
                <p className="text-gray-700 text-sm">Evidence, examples, explanations</p>
                
                <p className="font-medium text-purple-700 mt-3">3. Concluding Sentence</p>
                <p className="text-gray-700 text-sm">Links to next paragraph or section</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Common Pitfalls</h3>
              <div className="space-y-4">
                {[
                  {issue: "Plagiarism", solution: "Always cite properly, use plagiarism checkers"},
                  {issue: "Vague language", solution: "Be specific about methods/results"},
                  {issue: "Overclaiming", solution: "Match conclusions to actual results"},
                  {issue: "Poor organization", solution: "Follow standard paper structure"},
                  {issue: "Ignoring limitations", solution: "Every study has them - acknowledge"},
                  {issue: "Inconsistent formatting", solution: "Use journal template early"},
                ].map((item, i) => (
                  <div key={i} className="bg-red-50 p-3 rounded-lg">
                    <p className="font-bold text-red-700">⚠ {item.issue}</p>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">Transition Phrases</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "However,...", "In contrast,...", 
                  "Furthermore,...", "Moreover,...", 
                  "Consequently,...", "Therefore,...",
                  "For instance,...", "Specifically,...",
                  "Prior research...", "Subsequently,..."
                ].map((phrase, i) => (
                  <div key={i} className="bg-purple-100 p-2 rounded text-center text-sm">
                    {phrase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results and Discussion */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">📈 Results & Discussion</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Presenting Results</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Organize <strong>logically</strong> (by research questions/hypotheses)</li>
                <li>Use <strong>tables/figures</strong> for key results (but don't duplicate in text)</li>
                <li>Report <strong>negative results</strong> - they're still valuable</li>
                <li>Include <strong>statistical significance</strong> where applicable</li>
                <li>Number and title all <strong>figures/tables</strong> properly</li>
              </ul>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Effective Figure Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>High resolution (300dpi minimum)</li>
                  <li>Clear labels (axis, units, legends)</li>
                  <li>Color-blind friendly palettes</li>
                  <li>Consistent style throughout paper</li>
                  <li>Save vector formats (PDF, EPS) when possible</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Writing Discussion</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Interpret</strong> key findings in context of research questions</li>
                <li><strong>Compare</strong> with prior work (agreements/disagreements)</li>
                <li>Explain <strong>unexpected results</strong> or limitations</li>
                <li>Discuss <strong>implications</strong> for theory/practice</li>
                <li>Suggest <strong>future research</strong> directions</li>
                <li>End with <strong>strong conclusion</strong> answering "So what?"</li>
              </ol>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Discussion Phrases:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "The results indicate...", 
                    "This finding aligns with...", 
                    "Contrary to expectations...", 
                    "A possible explanation...",
                    "This suggests that...",
                    "Further research should..."
                  ].map((phrase, i) => (
                    <div key={i} className="bg-white p-2 rounded text-sm text-center">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Write Section - Expanded */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-purple-300">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-10">🚀 Step-by-Step: How to Write a Research Paper</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {step: 1, text: "Pick a trending, relevant topic with clear research gap", details: "Use tools like Connected Papers, Litmaps to explore"},
              {step: 2, text: "Study 15–20 key papers to understand the domain", details: "Create annotated bibliography"},
              {step: 3, text: "Frame specific research questions/hypotheses", details: "Use FINER criteria (Feasible, Interesting, Novel, Ethical, Relevant)"},
              {step: 4, text: "Choose appropriate research methods", details: "Quantitative/qualitative/mixed methods"},
              {step: 5, text: "Collect data through experiments/surveys/simulations", details: "Ensure proper sample size, controls"},
              {step: 6, text: "Analyze data using appropriate statistical tools", details: "SPSS, R, Python, MATLAB etc."},
              {step: 7, text: "Create clear tables/figures to visualize results", details: "Follow journal formatting guidelines"},
              {step: 8, text: "Write draft following standard structure", details: "Abstract last, introduction first"},
              {step: 9, text: "Refine arguments, ensure logical flow", details: "Use transition phrases between sections"},
              {step: 10, text: "Cite all sources properly (avoid plagiarism)", details: "Use Zotero/Mendeley for reference management"},
              {step: 11, text: "Proofread for clarity, grammar, formatting", details: "Read aloud, use Grammarly/Ginger"},
              {step: 12, text: "Get feedback from peers/advisors", details: "Incorporate constructive criticism"},
              {step: 13, text: "Select appropriate journal/conference", details: "Check scope, impact factor, acceptance rate"},
              {step: 14, text: "Format paper to submission guidelines", details: "Word/LaTeX templates"},
              {step: 15, text: "Write compelling cover letter", details: "Highlight novelty and significance"},
            ].map((item, i) => (
              <div key={i} className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow hover:bg-purple-100 transition-all">
                <span className="block text-purple-700 font-bold text-lg mb-2">Step {item.step}</span>
                <p className="text-gray-800 font-medium">{item.text}</p>
                <p className="text-gray-600 text-sm mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation Styles - Expanded */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">📚 Citation Styles</h2>
          <p className="text-gray-700 mb-6">
            Proper citation is essential to avoid plagiarism and give credit to original authors. Different disciplines use different styles:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "📌 APA (7th Edition)", 
                desc: "Psychology, Education, Social Sciences",
                example: "Author, A. (2023). Title in sentence case. Publisher.",
                books: "1-2 authors: list all; 3+ authors: et al.",
                journal: "Author, A. (2023). Article title. Journal Name, 12(3), 45-67. https://doi.org/xx"
              },
              { 
                title: "⚡ IEEE Style", 
                desc: "Engineering, Computer Science",
                example: "[1] A. Author, Book Title. City: Publisher, 2023.",
                books: "Numerical references in square brackets",
                journal: "[2] A. Author, 'Article title,' J. Name, vol. 12, no. 3, pp. 45-67, 2023."
              },
              { 
                title: "📖 MLA (9th Edition)", 
                desc: "Humanities, Literature",
                example: "Author, Anne. Book Title. Publisher, 2023.",
                books: "Works Cited list alphabetically",
                journal: "Author, Anne. 'Article Title.' Journal Name, vol. 12, no. 3, 2023, pp. 45-67."
              },
            ].map((c, i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-3">{c.desc}</p>
                <div className="bg-white p-3 rounded mb-3">
                  <p className="text-sm font-mono text-gray-800">{c.example}</p>
                </div>
                <p className="text-sm text-gray-700"><strong>Books:</strong> {c.books}</p>
                <p className="text-sm text-gray-700"><strong>Journal:</strong> {c.journal}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">🛑 Plagiarism Avoidance</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Always cite ideas that aren't yours",
                "Use quotation marks for direct quotes",
                "Paraphrase properly (not just synonyms)",
                "Cite even when summarizing",
                "Use plagiarism checkers before submission",
                "When in doubt, cite it out",
              ].map((tip, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-start">
                  <div className="text-yellow-600 mr-2">•</div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference Management Tools */}
        <section className="bg-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">🛠️ Reference Management Tools</h2>
          <p className="text-gray-700 mb-6">
            These tools help organize references and automatically format citations:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Zotero",
                desc: "Free, open-source tool with browser plugin",
                features: "PDF metadata capture, group libraries, Word/LibreOffice integration",
                link: "https://www.zotero.org/"
              },
              {
                name: "Mendeley",
                desc: "Elsevier product with social features",
                features: "PDF annotation, recommendation system, mobile app",
                link: "https://www.mendeley.com/"
              },
              {
                name: "EndNote",
                desc: "Premium tool with advanced features",
                features: "Reference sharing, custom styles, full-text search",
                link: "https://endnote.com/"
              }
            ].map((tool, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{tool.name}</h3>
                <p className="text-gray-700 mb-3">{tool.desc}</p>
                <p className="text-sm text-gray-600 mb-4"><strong>Features:</strong> {tool.features}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">How to Use Reference Managers:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Create library and organize by projects/topics</li>
              <li>Import references from databases (automatic metadata)</li>
              <li>Attach PDFs and add notes/annotations</li>
              <li>Insert citations as you write (Word/Google Docs plugins)</li>
              <li>Change citation styles with one click</li>
              <li>Generate bibliography automatically</li>
            </ol>
          </div>
        </section>

        {/* Journal Selection and Submission */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">📩 Journal Selection & Submission</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Choosing the Right Journal</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Check <strong>scope/aims</strong> - does your paper fit?</li>
                <li>Consider <strong>impact factor</strong> and reputation</li>
                <li>Look at <strong>acceptance rates</strong> (10-30% is typical)</li>
                <li>Review <strong>publication timeline</strong> (some take 12+ months)</li>
                <li>Check if <strong>open access</strong> fees apply</li>
                <li>Search for <strong>special issues</strong> on your topic</li>
                <li>Ask <strong>advisors/colleagues</strong> for recommendations</li>
              </ul>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Journal Finder Tools:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {name: "JournalGuide", url: "https://www.journalguide.com"},
                    {name: "Springer Journal Suggester", url: "https://journalsuggester.springer.com"},
                    {name: "Elsevier Finder", url: "https://journalfinder.elsevier.com"},
                    {name: "IEEE Publication Recommender", url: "https://publication-recommender.ieee.org"},
                  ].map((tool, i) => (
                    <a 
                      key={i}
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded text-center text-sm hover:shadow"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Submission Process</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Format</strong> paper to journal guidelines (Word/LaTeX template)</li>
                <li>Write <strong>cover letter</strong> highlighting significance</li>
                <li>Prepare <strong>supplementary materials</strong> (data, code, etc.)</li>
                <li>Suggest <strong>potential reviewers</strong> (if requested)</li>
                <li>Complete <strong>author declarations</strong> (ethics, conflicts)</li>
                <li>Submit through <strong>online system</strong> (Editorial Manager, ScholarOne)</li>
                <li>Await <strong>editor/reviewer feedback</strong> (typically 2-6 months)</li>
              </ol>
              
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Responding to Reviews:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Stay professional and polite</li>
                  <li>Address all comments point-by-point</li>
                  <li>Clearly mark changes in revised manuscript</li>
                  <li>For disagreements, provide evidence</li>
                  <li>Return revisions by deadline</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Common Decision Types:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {type: "Accept", desc: "Rare - paper accepted as is", color: "bg-green-100 text-green-800"},
                {type: "Minor Revisions", desc: "Small changes needed", color: "bg-blue-100 text-blue-800"},
                {type: "Major Revisions", desc: "Significant changes required", color: "bg-yellow-100 text-yellow-800"},
                {type: "Reject", desc: "Paper not suitable", color: "bg-red-100 text-red-800"},
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-3 rounded-lg text-center`}>
                  <div className="font-bold">{item.type}</div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Ethics */}
        <section className="bg-purple-50 p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">⚖️ Academic Ethics</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Research Integrity</h3>
              <div className="space-y-4">
                {[
                  {issue: "Plagiarism", desc: "Using others' work without credit"},
                  {issue: "Fabrication", desc: "Making up data/results"},
                  {issue: "Falsification", desc: "Manipulating research data"},
                  {issue: "Duplicate Submission", desc: "Submitting same paper to multiple journals"},
                  {issue: "Authorship Disputes", desc: "Who gets credit for the work"},
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-purple-100">
                    <h4 className="font-bold text-purple-700">❌ {item.issue}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Best Practices</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Get proper <strong>institutional approval</strong> for human/animal studies</li>
                <li>Disclose all <strong>conflicts of interest</strong></li>
                <li>Ensure <strong>data availability</strong> (share when possible)</li>
                <li>Give proper <strong>acknowledgments</strong> to contributors</li>
                <li>Follow <strong>copyright laws</strong> for figures/data</li>
                <li>Report <strong>negative results</strong> - they're still valuable</li>
              </ul>
              
              <div className="mt-6 bg-white p-4 rounded-lg border border-purple-100">
                <h4 className="font-bold text-purple-700 mb-2">Authorship Criteria:</h4>
                <p className="text-gray-700 text-sm">All authors should have:</p>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                  <li>Made significant contributions</li>
                  <li>Approved the final version</li>
                  <li>Agreed to be accountable</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">Order typically reflects contribution level.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section - Expanded */}
        <section className="bg-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">📄 Templates (IEEE, Springer, Elsevier)</h2>
          <p className="text-gray-700 mb-6">
            Using the correct template from the beginning saves time and ensures proper formatting:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "IEEE Conference Template (A4)",
                link: "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/Conference-template-A4.doc",
                details: "Two-column format, 10pt font, specific heading styles"
              },
              {
                name: "Springer LNCS (LaTeX)",
                link: "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines",
                details: "Single column, wide margins, numbered sections"
              },
              {
                name: "Elsevier Article (Word)",
                link: "https://www.elsevier.com/authors/policies-and-guidelines/latex-instructions",
                details: "Flexible format, requires abstract graphical abstract"
              },
              {
                name: "ACM SIG Proceedings (Overleaf)",
                link: "https://www.acm.org/publications/proceedings-template",
                details: "Prefer LaTeX, strict page limits for conferences"
              },
              {
                name: "Nature Research Format",
                link: "https://www.nature.com/nature/for-authors/formatting-guide",
                details: "Very specific requirements, often needs professional editing"
              },
              {
                name: "APA Style Template",
                link: "https://apastyle.apa.org/style-grammar-guidelines/paper-format",
                details: "Title page, running head, specific reference format"
              }
            ].map((tpl, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <div className="text-lg font-medium text-gray-800 mb-2">{tpl.name}</div>
                <p className="text-sm text-gray-600 mb-3">{tpl.details}</p>
                <a
                  href={tpl.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  Download / Visit Guidelines →
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">LaTeX vs. Word for Research Papers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-700 mb-2">LaTeX Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Perfect for mathematical equations</li>
                  <li>Automatic numbering of figures/tables</li>
                  <li>Consistent formatting across documents</li>
                  <li>Preferred in CS, Math, Physics</li>
                  <li>Free and open-source</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-700 mb-2">Word Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Easier for collaborative editing</li>
                  <li>Familiar interface for most users</li>
                  <li>Real-time spell/grammar check</li>
                  <li>Preferred in some social sciences</li>
                  <li>Track changes feature</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Tip:</strong> Many journals provide both LaTeX and Word templates. Choose based on your comfort level and field norms.
            </p>
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">🚫 Common Beginner Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Content Issues</h3>
              <div className="space-y-4">
                {[
                  {mistake: "Vague research questions", fix: "Make specific, measurable, achievable"},
                  {mistake: "Weak literature review", fix: "Critically analyze, don't just summarize"},
                  {mistake: "Methodology not reproducible", fix: "Provide enough detail for replication"},
                  {mistake: "Overgeneralizing results", fix: "Stay within scope of your data"},
                  {mistake: "Ignoring limitations", fix: "Acknowledge weaknesses honestly"},
                ].map((item, i) => (
                  <div key={i} className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-700">✖ {item.mistake}</h4>
                    <p className="text-gray-700">✅ <strong>Fix:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Writing & Formatting</h3>
              <div className="space-y-4">
                {[
                  {mistake: "Poor organization", fix: "Follow standard IMRaD structure"},
                  {mistake: "Inconsistent tense", fix: "Present for established knowledge, past for your work"},
                  {mistake: "Overuse of passive voice", fix: "Use active where possible for clarity"},
                  {mistake: "Not following guidelines", fix: "Study journal's author instructions carefully"},
                  {mistake: "Last-minute submission", fix: "Leave time for proofreading/editing"},
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-700">✖ {item.mistake}</h4>
                    <p className="text-gray-700">✅ <strong>Fix:</strong> {item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">🔍 Self-Check Before Submission:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "All sections complete?",
                "Figures/tables numbered and referenced?",
                "Citations consistent and complete?",
                "Spelling/grammar checked?",
                "Within page limit?",
                "Formatted to guidelines?",
                "Ethical requirements met?",
                "Cover letter included?",
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg text-center font-medium flex items-center justify-center">
                  <input type="checkbox" className="mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Video Playlist */}
        <section className="bg-white p-10 rounded-3xl shadow-xl border border-purple-200">
          <h2 className="text-4xl font-bold text-purple-700 mb-6">🎥 Must-Watch YouTube Videos</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get started with the best tutorials and insights from top educators and researchers worldwide.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {youtubeVideos.map((video, idx) => (
              <div key={idx} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{video.title}</h3>
                <p className="text-gray-700 mb-2">Channel: {video.channel}</p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-purple-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">More Learning Resources:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {name: "Coursera", url: "https://www.coursera.org/learn/research-methods"},
                {name: "edX Research Courses", url: "https://www.edx.org/learn/research"},
                {name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/writing-and-humanistic-studies/"},
                {name: "Stanford Writing", url: "https://undergrad.stanford.edu/tutoring-support/hume-center/resources/student-resources/academic-writing-resources"},
              ].map((resource, i) => (
                <a 
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-lg shadow text-center hover:bg-purple-50"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
         {/* Call to Action */}
        <section className="bg-purple-50 p-10 rounded-3xl text-center shadow-xl border border-purple-200">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Wanna start your research journey?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-purple-800">ResAIShala</span> is your partner from start to publication.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Learn to write impactful papers, submit to journals, and even secure patents.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-purple-800 transition"
          >
            Join us and bring your research to life
          </button>
        </section>
      </main>
    </div>
  );
}