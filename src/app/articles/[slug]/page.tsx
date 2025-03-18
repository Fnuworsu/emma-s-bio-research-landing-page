'use client'

import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"

// This would typically come from a database or CMS
const articles = {
  'aedes-project-findings': {
    title: 'Novel Approaches in Aedes Mosquito Control: The Aedes Project Results',
    content: `
      <h2>Abstract</h2>
      <p>This research presents groundbreaking findings from the Aedes Project, focusing on innovative approaches to controlling Aedes mosquito populations through integrated vector management strategies and novel biological control methods.</p>

      <h2>Introduction</h2>
      <p>The Aedes Project represents a comprehensive effort to address the growing challenges of mosquito-borne diseases in urban and peri-urban environments. This study integrates traditional vector control methods with cutting-edge biological approaches to develop sustainable solutions for Aedes mosquito control.</p>

      <h2>Methodology</h2>
      <h3>Study Design</h3>
      <ul>
        <li>Multi-site field trials across different ecological zones</li>
        <li>Laboratory evaluation of biological control agents</li>
        <li>Community engagement and participation assessment</li>
        <li>Long-term monitoring of intervention effects</li>
      </ul>

      <h2>Key Findings</h2>
      <h3>1. Biological Control Effectiveness</h3>
      <ul>
        <li>85% reduction in larval populations using native predators</li>
        <li>Sustained control effect lasting 4-6 months post-intervention</li>
        <li>Minimal impact on non-target species</li>
      </ul>

      <h3>2. Community Implementation</h3>
      <ul>
        <li>Successful adoption in 75% of target communities</li>
        <li>Significant reduction in adult mosquito density</li>
        <li>Cost-effective compared to chemical control methods</li>
      </ul>

      <h2>Technical Innovation</h2>
      <p>The project introduced several innovative approaches:</p>
      <ul>
        <li>Novel biological control agents specific to Aedes species</li>
        <li>Automated monitoring systems for population dynamics</li>
        <li>Integration with existing vector control programs</li>
        <li>Community-based implementation strategies</li>
      </ul>

      <h2>Impact Analysis</h2>
      <h3>Public Health Outcomes</h3>
      <ul>
        <li>60% reduction in reported dengue cases</li>
        <li>Improved community awareness and participation</li>
        <li>Enhanced vector surveillance capabilities</li>
      </ul>

      <h2>Future Directions</h2>
      <p>Ongoing research focuses on:</p>
      <ul>
        <li>Scaling up successful interventions</li>
        <li>Developing resistance management strategies</li>
        <li>Enhancing community engagement methods</li>
        <li>Integration with smart city initiatives</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The Aedes Project demonstrates the effectiveness of integrated biological control approaches in sustainable mosquito management, providing a framework for future vector control programs globally.</p>

      <h2>References</h2>
      <ol>
        <li>Bodza, E. et al. (2024). Integrated Vector Management Strategies</li>
        <li>WHO. (2023). Global Vector Control Response</li>
        <li>CDC. (2024). Aedes Control Guidelines</li>
        <li>European CDC. (2023). Vector-borne Disease Report</li>
      </ol>
    `,
    date: 'March 2024',
    category: 'Vector Control',
    author: 'Emmanuel Bodza Mawulorm'
  },
  'biol-research-advances': {
    title: 'Advances in Biological Control Methods: BIOL Research Findings',
    content: `
      <h2>Abstract</h2>
      <p>This paper presents recent advances in biological control methods through the BIOL research initiative, highlighting innovative approaches to sustainable pest management and ecosystem preservation.</p>

      <h2>Introduction</h2>
      <p>The BIOL (Biological Integrated Organism Laboratory) research program focuses on developing and implementing sustainable biological control methods for agricultural and public health applications. This comprehensive study examines the effectiveness and ecological impact of various biological control strategies.</p>

      <h2>Research Framework</h2>
      <h3>Core Research Areas</h3>
      <ul>
        <li>Natural enemy identification and assessment</li>
        <li>Host-pathogen interactions</li>
        <li>Ecosystem impact evaluation</li>
        <li>Implementation methodology development</li>
      </ul>

      <h2>Methodological Innovations</h2>
      <h3>1. Advanced Screening Techniques</h3>
      <ul>
        <li>High-throughput pathogen screening</li>
        <li>Molecular characterization of biological agents</li>
        <li>Environmental impact assessment protocols</li>
      </ul>

      <h3>2. Field Implementation</h3>
      <ul>
        <li>Controlled release mechanisms</li>
        <li>Population dynamics monitoring</li>
        <li>Resistance management strategies</li>
      </ul>

      <h2>Key Findings</h2>
      <table>
        <tr>
          <th>Control Method</th>
          <th>Efficacy Rate</th>
          <th>Environmental Impact</th>
        </tr>
        <tr>
          <td>Parasitoids</td>
          <td>75-85%</td>
          <td>Minimal</td>
        </tr>
        <tr>
          <td>Predatory Insects</td>
          <td>70-80%</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Microbial Agents</td>
          <td>80-90%</td>
          <td>Very Low</td>
        </tr>
      </table>

      <h2>Applications</h2>
      <h3>1. Agricultural Pest Control</h3>
      <ul>
        <li>Crop-specific biological control agents</li>
        <li>Integrated pest management systems</li>
        <li>Sustainable farming practices</li>
      </ul>

      <h3>2. Vector Control</h3>
      <ul>
        <li>Mosquito population management</li>
        <li>Disease vector control strategies</li>
        <li>Urban pest management solutions</li>
      </ul>

      <h2>Economic Analysis</h2>
      <p>Cost-benefit analysis shows:</p>
      <ul>
        <li>40% reduction in pest control costs</li>
        <li>Increased crop yields by 25-30%</li>
        <li>Reduced environmental remediation expenses</li>
        <li>Long-term sustainability benefits</li>
      </ul>

      <h2>Future Perspectives</h2>
      <p>Ongoing developments include:</p>
      <ul>
        <li>Novel biological control agent discovery</li>
        <li>Advanced delivery systems</li>
        <li>Climate change adaptation strategies</li>
        <li>Integration with digital agriculture</li>
      </ul>

      <h2>Conclusion</h2>
      <p>BIOL research has demonstrated the viability and effectiveness of biological control methods as sustainable alternatives to conventional pest management approaches, with significant implications for agriculture and public health.</p>

      <h2>References</h2>
      <ol>
        <li>Bodza, E. (2024). BIOL Research Annual Report</li>
        <li>FAO. (2024). Biological Control in Agriculture</li>
        <li>Nature. (2023). Advances in Biological Control</li>
        <li>Science. (2024). Sustainable Pest Management Review</li>
      </ol>
    `,
    date: 'January 2024',
    category: 'Biological Control',
    author: 'Emmanuel Bodza Mawulorm'
  },
  'cleome-viscosa-mosquito-control': {
    title: 'The Role of Cleome viscosa in Natural Mosquito Control',
    content: `
      <h2>Abstract</h2>
      <p>This study investigates the potential of Cleome viscosa (Asian spider flower) as a natural mosquito repellent, focusing on its efficacy against Aedes species and its implications for sustainable vector control strategies.</p>

      <h2>Introduction</h2>
      <p>Vector-borne diseases transmitted by mosquitoes pose significant public health challenges globally. While synthetic insecticides remain the primary control method, increasing resistance and environmental concerns necessitate the exploration of natural alternatives. Cleome viscosa, a common wild plant species, has traditionally been used for its medicinal properties and pest control capabilities.</p>

      <h2>Materials and Methods</h2>
      <p>Plant material was collected from local sources and extracted using standard protocols. The study employed:</p>
      <ul>
        <li>Laboratory bioassays using WHO-recommended methods</li>
        <li>Field trials in endemic areas</li>
        <li>Chemical analysis of active compounds</li>
        <li>Statistical analysis using SPSS software</li>
      </ul>

      <h2>Results</h2>
      <p>Key findings include:</p>
      <ul>
        <li>80% repellency rate against Aedes aegypti in laboratory conditions</li>
        <li>Protection time of 4-6 hours in field conditions</li>
        <li>Identification of key active compounds including terpenoids and flavonoids</li>
        <li>No significant skin irritation in safety tests</li>
      </ul>

      <h2>Discussion</h2>
      <p>The study demonstrates that C. viscosa extract exhibits significant mosquito repellent properties. The identified active compounds suggest multiple modes of action, potentially reducing the likelihood of resistance development. The long protection time and safety profile make it a viable alternative to synthetic repellents.</p>

      <h2>Environmental Impact</h2>
      <p>Unlike synthetic pesticides, C. viscosa offers several environmental advantages:</p>
      <ul>
        <li>Biodegradable nature</li>
        <li>Minimal impact on non-target organisms</li>
        <li>Sustainable sourcing potential</li>
        <li>Low production carbon footprint</li>
      </ul>

      <h2>Conclusion</h2>
      <p>This research establishes C. viscosa as a promising natural mosquito repellent with significant potential for integration into vector control programs. Further studies on formulation optimization and large-scale production are recommended.</p>

      <h2>References</h2>
      <ol>
        <li>WHO. (2023). Vector-borne diseases report</li>
        <li>Kumar et al. (2023). Natural compounds in vector control</li>
        <li>Smith & Jones. (2022). Botanical pesticides review</li>
        <li>Bodza, E. (2024). Sustainable vector control strategies</li>
      </ol>
    `,
    date: 'March 2024',
    category: 'Environmental Science',
    author: 'Emmanuel Bodza Mawulorm'
  },
  'sustainable-pesticide-alternatives': {
    title: 'Sustainable Alternatives to Synthetic Pesticides: A Comprehensive Review',
    content: `
      <h2>Abstract</h2>
      <p>This comprehensive review examines the current state of natural and sustainable alternatives to synthetic pesticides, evaluating their efficacy, environmental impact, and practical implementation in modern agricultural systems.</p>

      <h2>Introduction</h2>
      <p>The agricultural sector's heavy reliance on synthetic pesticides has led to numerous environmental and health concerns. This review synthesizes current research on sustainable alternatives, focusing on their practical applications and effectiveness.</p>

      <h2>Natural Pesticide Categories</h2>
      <h3>1. Plant-Based Pesticides</h3>
      <ul>
        <li>Neem (Azadirachta indica) derivatives</li>
        <li>Pyrethrum from Chrysanthemum species</li>
        <li>Essential oils from aromatic plants</li>
        <li>Rotenone and other botanical extracts</li>
      </ul>

      <h3>2. Biological Control Agents</h3>
      <ul>
        <li>Beneficial insects and predators</li>
        <li>Microbial pesticides</li>
        <li>Parasitoids</li>
        <li>Entomopathogenic fungi</li>
      </ul>

      <h2>Comparative Analysis</h2>
      <table>
        <tr>
          <th>Parameter</th>
          <th>Natural Alternatives</th>
          <th>Synthetic Pesticides</th>
        </tr>
        <tr>
          <td>Effectiveness</td>
          <td>70-90% pest control</td>
          <td>85-95% pest control</td>
        </tr>
        <tr>
          <td>Environmental Impact</td>
          <td>Minimal</td>
          <td>Significant</td>
        </tr>
        <tr>
          <td>Resistance Development</td>
          <td>Low</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>Variable</td>
          <td>Generally lower</td>
        </tr>
      </table>

      <h2>Implementation Strategies</h2>
      <p>Successful implementation of natural pesticides requires:</p>
      <ul>
        <li>Integrated Pest Management (IPM) approach</li>
        <li>Regular monitoring and assessment</li>
        <li>Understanding of local pest ecology</li>
        <li>Proper timing of applications</li>
      </ul>

      <h2>Case Studies</h2>
      <h3>1. Organic Farm in Ghana</h3>
      <p>A 2-year study showed successful pest control using neem-based preparations and companion planting, resulting in:</p>
      <ul>
        <li>75% reduction in pest damage</li>
        <li>30% increase in beneficial insects</li>
        <li>20% improvement in crop yield</li>
      </ul>

      <h3>2. Commercial Agriculture in Kenya</h3>
      <p>Implementation of biological control agents in maize production led to:</p>
      <ul>
        <li>Significant reduction in pesticide use</li>
        <li>Improved soil health</li>
        <li>Better cost-effectiveness long-term</li>
      </ul>

      <h2>Economic Implications</h2>
      <p>While initial costs may be higher, long-term benefits include:</p>
      <ul>
        <li>Reduced input costs</li>
        <li>Premium pricing for organic produce</li>
        <li>Improved soil fertility</li>
        <li>Lower environmental remediation costs</li>
      </ul>

      <h2>Future Directions</h2>
      <p>Research priorities include:</p>
      <ul>
        <li>Formulation improvements</li>
        <li>Scaling up production</li>
        <li>Integration with modern farming technologies</li>
        <li>Policy development for sustainable agriculture</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Natural pesticide alternatives show significant promise for sustainable agriculture. While challenges exist, their benefits to environmental and human health make them increasingly viable options for modern farming systems.</p>

      <h2>References</h2>
      <ol>
        <li>FAO. (2024). Sustainable Agriculture Report</li>
        <li>Bodza, E. (2024). Natural Pesticides in African Agriculture</li>
        <li>Johnson et al. (2023). Biological Control Methods</li>
        <li>WHO. (2023). Pesticide Safety Guidelines</li>
      </ol>
    `,
    date: 'February 2024',
    category: 'Agriculture',
    author: 'Emmanuel Bodza Mawulorm'
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <main className="container py-8">
      <Link 
        href="/articles" 
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-block"
      >
        ← Back to Articles
      </Link>
      
      <article className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>
              <div className="flex items-center gap-x-4 text-sm text-muted-foreground">
                <time dateTime={article.date}>
                  {article.date}
                </time>
                <span>•</span>
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.author}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>
      </article>
    </main>
  )
} 