import { NetworkProvider } from "@ton/blueprint";
import { TonPriceFeed, TonPriceFeedContractConnector } from "../src";
import { BlueprintTonNetwork } from "../src";
import { config } from "../src/config";
import { loadAddress } from "../src/deploy";

export async function run(provider: NetworkProvider) {
  const contract = await new TonPriceFeedContractConnector(
    new BlueprintTonNetwork(provider, config),
    await loadAddress(TonPriceFeed.getName())
  ).getAdapter();

  console.log(await contract.getData());
}
